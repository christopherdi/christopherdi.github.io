import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const ProjectList = [
  {
    title: 'Free User Potential Usage',
    tech: 'Python, PostgreSQL, Snowflake',
    description: 'Engineered scalable SQL pipelines to identify conversion clusters and accelerated engineering UI turnaround by 13%.',
    link: '/docs/zoom-snowflake' 
  },
  {
    title: 'Markdown Lint & Git Auto-Comment',
    tech: 'Python, Bash, Jenkins',
    description: 'Created a linting engine integrated with CI/CD to automate syntax validation and inject real-time failure diagnostics into PRs.',
    link: '/docs/ibm-triage'
  },
];

export default function Projects() {
  return (
    <Layout title="Projects" description="Technical Projects by Christopher Di">
      <main style={{maxWidth: '900px', margin: '0 auto', padding: '2rem'}}>
        <Heading as="h1" style={{textAlign: 'center', marginBottom: '2rem'}}>Technical Projects</Heading>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          {ProjectList.map((project, idx) => (
            <div key={idx} style={{padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9'}}>
              <Heading as="h3">{project.title}</Heading>
              <p><strong>Tech Stack:</strong> {project.tech}</p>
              <p>{project.description}</p>
              <a className="button button--outline button--primary" href={project.link}>Read Case Study</a>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}