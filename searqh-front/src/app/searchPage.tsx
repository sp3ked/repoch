"use client";

import { useState, useRef, useEffect } from 'react';
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faBars} />
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
        <button className={styles.chevronButton} onClick={() => setLeftNavOpen(false)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.navContent}>
          <nav>
            <ul>
              <li>Home</li>
              <li>Issues</li>
              <li>Pull requests</li>
              <li>Projects</li>
              <li>Discussions</li>
              <li>Codespaces</li>
              <li>Explore</li>
              <li>Marketplace</li>
            </ul>
          </nav>
        </div>
      </div>
      <div ref={rightNavRef} className={`${styles.rightNav} ${rightNavOpen ? styles.open : ''}`}>
        <div className={styles.rightNavHeader}>
          <div className={styles.profileInfo}>
            <div className={styles.profileIcon}></div>
            <span className={styles.username}>sp3ked</span>
          </div>
          <button className={styles.chevronButton} onClick={() => setRightNavOpen(false)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className={styles.rightNavContent}>
          <ul>
            <li>Set status</li>
            <li>Your profile</li>
            <li>Your repositories</li>
            <li>Your Copilot</li>
            <li>Your projects</li>
            <li>Your stars</li>
            <li>Your gists</li>
            <li>Your organizations</li>
            <li>Your enterprises</li>
            <li>Your sponsors</li>
            <li>Try Enterprise</li>
            <li>Feature preview</li>
            <li>Settings</li>
            <li>GitHub Docs</li>
            <li>GitHub Support</li>
            <li>GitHub Community</li>
            <li>Sign out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}