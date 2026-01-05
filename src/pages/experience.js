import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const ExperienceList = [
  {
    company: 'Zoom',
    role: 'Data Science Intern',
    duration: 'May 2025 – Aug. 2025',
    points: [
      'Leveraged Snowflake and Databricks to model churned user data, increasing engagement by 27%.',
      'Transformed raw usage patterns into actionable product roadmaps for AI Companion.',
      'Optimized data retrieval workflows, accelerating product decisions across teams.'
    ],
  },
  {
    company: 'IBM',
    role: 'Software Engineer Intern',
    duration: 'May 2024 – Aug. 2024',
    points: [
      'Engineered an automated feedback loop in Jenkins, reducing deployment issues by 19%.',
      'Developed a Markdown linting engine to automate syntax validation and documentation standards.',
      'Streamlined version pushes using Shell scripts and Jenkins pipelines.'
    ],
  },
];

function ExperienceCard({company, role, duration, points}) {
  return (
    <div style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <Heading as="h2">{company} - {role}</Heading>
      <p style={{fontStyle: 'italic', color: '#666'}}>{duration}</p>
      <ul>
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <Layout title="Experience" description="Christopher Di's Work History">
      <main style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
        <Heading as="h1" style={{textAlign: 'center', marginBottom: '3rem'}}>Work Experience</Heading>
        {ExperienceList.map((props, idx) => (
          <ExperienceCard key={idx} {...props} />
        ))}
      </main>
    </Layout>
  );
}