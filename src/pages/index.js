import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Christopher Di" description="Portfolio">
      <main className="lava-lamp-container">
        {/* The wrapper handles the 'collision' visual effect */}
        <div className="blob-wrapper">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`lava-blob blob-${i + 1}`}></div>
          ))}
        </div>

        <div className="hero-content">
          <h1 className="hero__title">Christopher Di</h1>
          <p className="hero__subtitle">Data Science @ UC Berkeley | Software Engineering Intern</p>
          
          <div className="hero__about-me">
            <h2>About Me</h2>
            <p>
              I am a Data Science student at <strong>UC Berkeley</strong> with a passion for building high-performance software 
              and data-driven solutions.
            </p>
          </div>

          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/experience">
              View My Experience 💼
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}