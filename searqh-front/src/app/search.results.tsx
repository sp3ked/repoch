import React from "react";
import styles from "./search.module.css";

interface SearchResultsProps {
  query: string;
  isLoading: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.searchResults}>
        <p>Searching for "{query}"...</p>
      </div>
    );
  }

  return (
    <div className={styles.searchResults}>
      <p>There are no results for "{query}"</p>
    </div>
  );
};

export default SearchResults;
