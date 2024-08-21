import React from "react";
import styles from "../styles/Style.module.css";



export default function About() {
  return (
    
    <div >
      <header className={styles.header}>
      <h1 className={styles.text}>ORY</h1>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      </header>
      <div className={styles.about}>
      <h1 className={styles.glass}>Welcome to My Portfolio</h1>
      <p className={styles.pulpy}>Hi, I'm Fayomi Roseline, an hair stylist.</p>
      </div>
    </div>
  );
}
