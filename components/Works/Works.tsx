import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Works.module.css';
import { WorkItem } from '../../types';

const workItems: WorkItem[] = [
  { id: 1, title: "B&O", description: "Marketing site design and build", image: "/airrupies.png", category: "Branding" },
  { id: 2, title: "Cozmetic", description: "Marketing site design and build", image: "/ui-animations.png", category: "Product" },
  { id: 3, title: "Xendou", description: "Marketing site design and build", image: "/work-3.jpg", category: "UI/UX" },
  { id: 4, title: "Blvck", description: "Marketing site design and build", image: "/work-4.jpg", category: "Branding" },
];

// Array of filter options
const filterOptions = ["All", "Branding", "Product", "UI/UX"];

function Works() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFilterClick = (filter: string) => {
    if (filter !== activeFilter) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveFilter(filter);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }
  };

  const filteredWorks = activeFilter === "All" 
    ? workItems 
    : workItems.filter(item => item.category === activeFilter);

  return (
    <section id="works" className={styles.works}>
      <h2 className={styles.sectionTitle}>Works</h2>
      
      {/* Filter buttons */}
      <div className={styles.workFilter}>
        {filterOptions.map(filter => (
          <button 
            key={filter}
            className={`${styles.filterButton} ${activeFilter === filter ? styles.filterActive : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Work items grid */}
      <div className={`${styles.workGrid} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
        {filteredWorks.map(item => (
          <div key={item.id} className={styles.workItem}>
            <div className={styles.workItemImageWrapper}>
              <Image 
                src={item.image} 
                alt={item.title} 
                width={400}
                height={300}
                style={{ width: '100%', height: 'auto' }}
              />
              <button className={styles.expandButton}>↗</button>
            </div>
            <div className={styles.workItemContent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;