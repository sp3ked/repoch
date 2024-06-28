import { Request, Response } from "express";
import { scrapeStartupData } from "../services/scraper";

export const initiateScrapingTask = async (req: Request, res: Response) => {
  const { searchQuery } = req.body;

  if (!searchQuery) {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    await scrapeStartupData(searchQuery);
    res.status(200).json({ message: "Scraping task initiated successfully" });
  } catch (error) {
    console.error("Error in scraping task:", error);
    res.status(500).json({ error: "An error occurred while scraping data" });
  }
};
