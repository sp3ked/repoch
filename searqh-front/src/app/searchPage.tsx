"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './Search.module.css';

export default function SearchPage() {
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);
  const leftNavRef = useRef<HTMLDivElement>(null);
  const rightNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (leftNavOpen && leftNavRef.current && !leftNavRef.current.contains(event.target as Node)) {
        setLeftNavOpen(false);
      }
      if (rightNavOpen && rightNavRef.current && !rightNavRef.current.contains(event.target as Node)) {
        setRightNavOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [leftNavOpen, rightNavOpen]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.menuButton} onClick={() => setLeftNavOpen(true)}>
          ☰
        </button>
        <h1>Search</h1>
        <button className={styles.profileIcon} onClick={() => setRightNavOpen(true)}></button>
      </header>
      <main className={styles.main}>
        <input 
          type="text" 
          placeholder="Search" 
          className={styles.searchInput}
        />
      </main>
      <div ref={leftNavRef} className={`${styles.leftNav} ${leftNavOpen ? styles.open : ''}`}>
        <button className={styles.closeNav} onClick={() => setLeftNavOpen(false)}>
          ←
        </button>
        <nav>
          <ul>
            <li>Nav1</li>
            <li>Nav2</li>
            <li>Nav3</li>
          </ul>
        </nav>
      </div>
      <div ref={rightNavRef} className={`${styles.rightNav} ${rightNavOpen ? styles.open : ''}`}>
        <button className={styles.closeNav} onClick={() => setRightNavOpen(false)}>
          →
        </button>
        <nav>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}