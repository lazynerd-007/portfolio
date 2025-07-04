import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://babsfauwaz.com/#person",
        "name": "Babatunde Fauwaz Odunewu",
        "givenName": "Babatunde",
        "familyName": "Odunewu",
        "jobTitle": "Branding Expert & Product Designer",
        "description": "Award Winning Branding Expert specializing in digital branding, visual design, UX research, and art direction",
        "url": "https://babsfauwaz.com",
        "email": "Hello@babsfauwaz.com",
        "image": "https://babsfauwaz.com/hero-image.png",
        "sameAs": [
          "https://github.com/lazynerd-007",
          "https://linkedin.com/in/babatunde-odunewu",
          "https://behance.net/babatunde-odunewu"
        ],
        "knowsAbout": [
          "Digital Branding",
          "Visual Design", 
          "UX Research",
          "Art Direction",
          "Product Design",
          "Figma",
          "Creative Strategy"
        ],
        "alumniOf": [
          {
            "@type": "CollegeOrUniversity",
            "name": "Cranfield University",
            "sameAs": "https://www.cranfield.ac.uk"
          },
          {
            "@type": "CollegeOrUniversity", 
            "name": "Queen Mary University of London",
            "sameAs": "https://www.qmul.ac.uk"
          }
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Product Designer",
          "occupationLocation": {
            "@type": "Country",
            "name": "United Kingdom"
          },
          "skills": "Digital Branding, Visual Design, UX Research, Art Direction"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://babsfauwaz.com/#website",
        "url": "https://babsfauwaz.com",
        "name": "Babatunde Odunewu Portfolio",
        "description": "Portfolio of Babatunde Fauwaz Odunewu, Award Winning Branding Expert and Product Designer",
        "author": {
          "@id": "https://babsfauwaz.com/#person"
        },
        "inLanguage": "en-GB"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://babsfauwaz.com/#service",
        "name": "Babatunde Odunewu Design Services",
        "description": "Professional branding and design services including digital branding, visual design, UX research, and art direction",
        "provider": {
          "@id": "https://babsfauwaz.com/#person"
        },
        "serviceType": [
          "Digital Branding",
          "Visual Design",
          "UX Research", 
          "Art Direction"
        ],
        "areaServed": "Worldwide",
        "url": "https://babsfauwaz.com"
      }
    ]
  };

  return (
    <div className={styles.container}>
      <Head>
        {/* Basic Meta Tags */}
        <title>Babatunde Fauwaz Odunewu - Award Winning Branding Expert & Product Designer</title>
        <meta name="description" content="Award Winning Branding Expert specializing in digital branding, visual design, UX research, and art direction. Creating unique visual identities for digital products with 8+ years of experience." />
        <meta name="keywords" content="branding expert, product designer, digital branding, visual design, UX research, art direction, portfolio, London, UK" />
        <meta name="author" content="Babatunde Fauwaz Odunewu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://babsfauwaz.com" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Babatunde Fauwaz Odunewu - Award Winning Branding Expert" />
        <meta property="og:description" content="Award Winning Branding Expert specializing in digital branding, visual design, UX research, and art direction. Creating unique visual identities for digital products." />
        <meta property="og:url" content="https://babsfauwaz.com" />
        <meta property="og:site_name" content="Babatunde Odunewu Portfolio" />
        <meta property="og:image" content="https://babsfauwaz.com/hero-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Babatunde Fauwaz Odunewu - Branding Expert" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Babatunde Fauwaz Odunewu - Award Winning Branding Expert" />
        <meta name="twitter:description" content="Award Winning Branding Expert specializing in digital branding, visual design, UX research, and art direction." />
        <meta name="twitter:image" content="https://babsfauwaz.com/hero-image.png" />
        <meta name="twitter:image:alt" content="Babatunde Fauwaz Odunewu - Branding Expert" />
        <meta name="twitter:creator" content="@babsfauwaz" />

        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#121212" />
        <meta name="msapplication-TileColor" content="#121212" />
        <meta name="application-name" content="Babatunde Odunewu Portfolio" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;