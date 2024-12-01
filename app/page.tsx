// app/page.tsx
import React from 'react';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My Blog</h1>
      </header>
      <main className={styles.main}>
        <h2>Welcome to My Blog</h2>
        <p>Explore the latest articles and insights.</p>
      </main>
      <footer className={styles.footer}>
        <p>© 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;