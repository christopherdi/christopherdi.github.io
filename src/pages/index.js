import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* These div 'blobs' now have room to float in the 100vh container */}
      <div className="lava-blob blob-1"></div>
      <div className="lava-blob blob-2"></div>
      <div className="lava-blob blob-3"></div>

      <div className="container" style={{textAlign: 'center'}}>
        <h1 className="hero__title">Christopher Di</h1>
        <p className="hero__subtitle">Data Science @ UC Berkeley | Software Engineering Intern</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/experience">
            View My Experience 💼
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Christopher Di - Data Scientist and Software Engineer Portfolio">
      <HomepageHeader />
      <main>
        <section className={styles.aboutSection} style={{padding: '2rem 0', maxWidth: '800px', margin: '0 auto'}}>
          <div className="container">
            <Heading as="h2">About Me</Heading>
            <p>
              I am a Data Science student at <b>UC Berkeley</b> with a passion for building 
              high-performance software and data-driven solutions. My experience ranges from 
              <b>Data Science at Zoom</b> to <b>Software Engineering at IBM</b>.
            </p>
            <p>
              I specialize in Python, C++, and React, and I enjoy solving complex problems 
              involving hardware accelerators and large-scale data pipelines.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
