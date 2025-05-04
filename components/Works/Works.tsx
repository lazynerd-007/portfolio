import React, { useState } from 'react';
import styles from './Works.module.css';
import { WorkItem } from '../../types';

const workItems: WorkItem[] = [
  { id: 1, title: &quot;B&O&quot;, description: &quot;Marketing site design and build&quot;, image: &quot;/airrupies.png&quot;, category: &quot;Branding&quot; },
  { id: 2, title: &quot;Cozmetic&quot;, description: &quot;Marketing site design and build&quot;, image: &quot;/ui-animations.png&quot;, category: &quot;Product&quot; },
  { id: 3, title: &quot;Xendou&quot;, description: &quot;Marketing site design and build&quot;, image: &quot;/work-3.jpg&quot;, category: &quot;UI/UX&quot; },
  { id: 4, title: &quot;Blvck&quot;, description: &quot;Marketing site design and build&quot;, image: &quot;/work-4.jpg&quot;, category: &quot;Branding&quot; },
];

const Works: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState(&quot;All&quot;);
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

  const filteredWorks = activeFilter === &quot;All&quot; 
    ? workItems 
    : workItems.filter(item => item.category === activeFilter);

  return (
    <section id="works" className={styles.works}>
      <h2 className={styles.sectionTitle}>Works</h2>
      <div className={styles.workFilter}>
        {[&quot;All&quot;, &quot;Branding&quot;, &quot;Product&quot;, &quot;UI/UX&quot;].map((filter) => (
          <button
            key={filter}
            className={`${styles.filterButton} ${activeFilter === filter ? styles.filterActive : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className={`${styles.workGrid} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
        {filteredWorks.map((item) => (
          <div key={item.id} className={styles.workItem}>
            <div className={styles.workItemImageWrapper}>
              <img src={item.image} alt={item.title} />
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
};

export default Works;