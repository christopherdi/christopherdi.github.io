import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Christopher Di" description="Portfolio">
      <main className="lava-lamp-container">
        {/* ADVANCED SVG FILTER: Glows the edges, not the overlaps */}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
          <defs>
            <filter id="goo-no-overlap-glow" x="-50%" y="-50%" width="200%" height="200%">
              {/* Step 1: Create the gooey collision */}
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
              
              {/* Step 2: Create a 'flat' version of the goo */}
              <feFlood floodColor="#88bdf2" result="color" />
              <feComposite in="color" in2="goo" operator="in" result="flat-goo" />

              {/* Step 3: Add an inner glow that respects the final shape silhouette */}
              <feMorphology operator="erode" radius="3" in="goo" result="shrunken" />
              <feGaussianBlur in="shrunken" stdDeviation="10" result="inner-blur" />
              <feComposite in="flat-goo" in2="inner-blur" operator="out" result="inner-glow-edge" />
              
              {/* Step 4: Merge the flat color and the edge glow */}
              <feMerge>
                <feMergeNode in="flat-goo" />
                <feMergeNode in="inner-glow-edge" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <div className="blob-wrapper">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`lava-blob blob-${i + 1}`}></div>
          ))}
        </div>

        <div className="hero-content">
          <h1 className="hero__title">Christopher Di</h1>
          <p className="hero__subtitle">Data Science @ UC Berkeley | Software Engineering Intern</p>
          <div className="hero__about-me">
            <h2>About Me</h2>
            <p>I am a Data Science student at <strong>UC Berkeley</strong> with a passion for building high-performance software.</p>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/experience">View My Experience 💼</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}