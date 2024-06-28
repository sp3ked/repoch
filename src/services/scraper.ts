// src/services/scraper.ts

import puppeteer from "puppeteer";
import Startup from "../models/Startup";

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

export async function scrapeStartupData(searchQuery: string): Promise<void> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(
      `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery + " startup",
      )}`,
    );

    // Scrape search results
    const searchResults = await page.evaluate(() => {
      const results: SearchResult[] = [];
      const items = document.querySelectorAll("div.g");
      items.forEach((item) => {
        const title = item.querySelector("h3")?.textContent || "";
        const link = item.querySelector("a")?.href || "";
        const snippet = item.querySelector("div.VwiC3b")?.textContent || "";
        results.push({ title, link, snippet });
      });
      return results;
    });

    // Process and save the results
    for (const result of searchResults) {
      const keywords = extractKeywords(result.snippet);
      await Startup.findOneAndUpdate(
        { website: result.link },
        {
          name: result.title,
          description: result.snippet,
          website: result.link,
          keywords: keywords,
        },
        { upsert: true, new: true },
      );
    }

    console.log(`Scraped and processed ${searchResults.length} results.`);
  } catch (error) {
    console.error("Error scraping data:", error);
  } finally {
    await browser.close();
  }
}

function extractKeywords(text: string): string[] {
  // List of common startup-related keywords
  const startupKeywords = [
    "innovation",
    "technology",
    "startup",
    "entrepreneur",
    "funding",
    "venture capital",
    "growth",
    "disrupt",
    "scale",
    "agile",
    "AI",
    "blockchain",
    "SaaS",
    "IoT",
    "fintech",
    "biotech",
    "machine learning",
    "data science",
    "cloud",
    "platform",
  ];

  const words = text.toLowerCase().match(/\b(\w+)\b/g) || [];
  return words.filter((word) => startupKeywords.includes(word));
}
