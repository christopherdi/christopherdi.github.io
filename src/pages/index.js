import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link'; 
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Christopher Di" description="Portfolio">
      <main className="lava-lamp-container">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
          <defs>
            <filter id="goo-no-overlap-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
              <feFlood floodColor="#FF4500" result="orange-color" />
              <feComposite in="orange-color" in2="goo" operator="in" result="orange-goo" />
              <feFlood floodColor="#FFD700" result="yellow-bloom" />
              <feComposite in="yellow-bloom" in2="goo" operator="in" result="yellow-goo" />
              <feGaussianBlur in="yellow-goo" stdDeviation="10" result="soft-glow" />
              <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="30" lightingColor="#ffffff" result="specOut">
                <fePointLight x="-5000" y="-10000" z="20000" />
              </feSpecularLighting>
              <feComposite in="specOut" in2="goo" operator="in" result="white-shine" />
              <feMerge>
                <feMergeNode in="soft-glow" />
                <feMergeNode in="orange-goo" />
                <feMergeNode in="white-shine" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        <div className="blob-wrapper">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className={`lava-blob blob-${i + 1}`} 
              style={{ '--i': i }}
            ></div>
          ))}
        </div>

        <div className="hero-content">
          <h1 className="hero__title">Christopher Di</h1>
          <p className="hero__subtitle">Data Science @ UC Berkeley | Software Engineering Intern</p>
          <div className="hero__about-me">
            <h2>About Me</h2>
            <p>
              I am a Data Science student at <strong>UC Berkeley</strong> with a passion for building 
              high-performance software and data-driven solutions.
            </p>
          </div>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/experience">
              View My Experience 💼
            </Link>
          </div>
        </div>

        <div className="lava-base"></div>
      </main>
    </Layout>
  );
}