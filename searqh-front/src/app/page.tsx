import styles from './search.module.css';

export default function SearchPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.menuButton}>
          {/* You can use an icon library or SVG here */}
          ☰
        </button>
        <h1>Search</h1>
        <div className={styles.profileIcon}></div>
      </header>
      <main className={styles.main}>
        <input 
          type="text" 
          placeholder="Search" 
          className={styles.searchInput}
        />
      </main>
    </div>
  );
}