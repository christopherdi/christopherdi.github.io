import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const HobbiesList = [
  {
    title: 'Outdoor Exploration',
    icon: '⛰️',
    description: 'Whether it is hiking around the Bay Area or traveling to new cities, I love staying active and exploring new environments.'
  },
  {
    title: 'Culinary Arts',
    icon: '🍳',
    description: 'I enjoy experimenting with new recipes—treating the kitchen like a laboratory for flavor profiles and precise techniques.'
  },
  {
    title: 'Continuous Learning',
    icon: '📚',
    description: 'Outside of class, I follow developments in hardware acceleration and AI ethics, keeping up with how tech impacts society.'
  }
];

export default function Hobbies() {
  return (
    <Layout title="Hobbies" description="About Christopher Di's interests">
      <main style={{maxWidth: '800px', margin: '0 auto', padding: '3rem 1rem'}}>
        <Heading as="h1" style={{textAlign: 'center', marginBottom: '1rem'}}>Beyond the Code</Heading>
        <p style={{textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem'}}>
          When I'm not at my desk or in the lab at Berkeley, here's what I'm up to.
        </p>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          {HobbiesList.map((hobby, idx) => (
            <div key={idx} style={{display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem', backgroundColor: '#f0f4f8', borderRadius: '12px'}}>
              <span style={{fontSize: '3rem'}}>{hobby.icon}</span>
              <div>
                <Heading as="h3" style={{margin: 0}}>{hobby.title}</Heading>
                <p style={{margin: 0, marginTop: '0.5rem'}}>{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}