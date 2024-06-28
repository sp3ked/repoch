"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const featuredStartups = [
  { name: "EcoTech", description: "Sustainable energy solutions", category: "CleanTech" },
  { name: "HealthAI", description: "AI-powered health diagnostics", category: "HealthTech" },
  { name: "FinFlow", description: "Blockchain-based financial services", category: "FinTech" },
  { name: "SpaceX", description: "Advancing space exploration", category: "Aerospace" }
];

const trendingStartups = [
  { name: "DataMind", description: "Big data analytics platform", category: "Data Science" },
  { name: "VRWorld", description: "Virtual reality experiences", category: "Entertainment" },
  { name: "GreenGrow", description: "Vertical farming technology", category: "AgriTech" },
  { name: "CyberShield", description: "Advanced cybersecurity solutions", category: "Security" }
];

export default function SearchPage() {
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);
  const leftNavRef = useRef<HTMLDivElement>(null);
  const rightNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        leftNavOpen &&
        leftNavRef.current &&
        !leftNavRef.current.contains(event.target as Node)
      ) {
        setLeftNavOpen(false);
      }
      if (
        rightNavOpen &&
        rightNavRef.current &&
        !rightNavRef.current.contains(event.target as Node)
      ) {
        setRightNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [leftNavOpen, rightNavOpen]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          className={styles.menuButton}
          onClick={() => setLeftNavOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Search</h1>
        <button
          className={styles.profileIcon}
          onClick={() => setRightNavOpen(true)}
        ></button>
      </header>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <section className={styles.startupSection}>
            <h2>Featured</h2>
            <div className={styles.cardContainer}>
              {featuredStartups.map((startup, index) => (
                <Card key={index} {...startup} />
              ))}
            </div>
          </section>
          
          <section className={styles.startupSection}>
            <h2>Trending</h2>
            <div className={styles.cardContainer}>
              {trendingStartups.map((startup, index) => (
                <Card key={index} {...startup} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <div
        ref={leftNavRef}
        className={`${styles.leftNav} ${leftNavOpen ? styles.open : ""}`}
      >
        <button
          className={styles.chevronButton}
          onClick={() => setLeftNavOpen(false)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.navContent}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Explore</li>
              <li>Jobs</li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        ref={rightNavRef}
        className={`${styles.rightNav} ${rightNavOpen ? styles.open : ""}`}
      >
        <div className={styles.rightNavHeader}>
          <button
            className={styles.chevronButton}
            onClick={() => setRightNavOpen(false)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className={styles.profileInfo}>
            <span className={styles.username}>username</span>
            <div className={styles.profileIcon}></div>
          </div>
        </div>
        <div className={styles.rightNavContent}>
          <ul>
            <li>Your profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}