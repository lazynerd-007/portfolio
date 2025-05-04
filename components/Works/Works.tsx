import React, { useState } from 'react';
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

  return React.createElement('section', { id: 'works', className: styles.works }, [
    React.createElement('h2', { key: 'title', className: styles.sectionTitle }, 'Works'),
    
    // Filter buttons
    React.createElement('div', { key: 'filter', className: styles.workFilter }, 
      filterOptions.map(filter => 
        React.createElement('button', { 
          key: filter,
          className: `${styles.filterButton} ${activeFilter === filter ? styles.filterActive : ''}`,
          onClick: () => handleFilterClick(filter)
        }, filter)
      )
    ),
    
    // Work items grid
    React.createElement('div', { 
      key: 'grid',
      className: `${styles.workGrid} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`
    }, filteredWorks.map(item => 
      React.createElement('div', { key: item.id, className: styles.workItem }, [
        React.createElement('div', { key: 'wrapper', className: styles.workItemImageWrapper }, [
          React.createElement('img', { key: 'img', src: item.image, alt: item.title }),
          React.createElement('button', { key: 'expand', className: styles.expandButton }, '↗')
        ]),
        React.createElement('div', { key: 'content', className: styles.workItemContent }, [
          React.createElement('h3', { key: 'title' }, item.title),
          React.createElement('p', { key: 'desc' }, item.description)
        ])
      ])
    ))
  ]);
}

export default Works;