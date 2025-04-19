import React from 'react';
import BentoItem from './BentoItem';
import './style.css';

const bentoData = [
  {
    heading: 'Social Media <span>10x</span> Faster with AI',
    image: '/images/illustration-five-stars.webp',
    description: 'Over 4,000 5-star reviews',
  },
  {
    heading: 'Manage multiple accounts and platforms.',
    image: '/images/illustration-multiple-platforms.webp',
  },
  {
    heading: 'Maintain a consistent posting schedule.',
    image: '/images/illustration-consistent-schedule.webp',
  },
  {
    heading: 'Schedule to social media.',
    image: '/images/illustration-schedule-posts.webp',
    description: 'Optimize post timings to publish content at the perfect time for your audience.',
  },
  {
    heading: 'Grow followers with non-stop content.',
    image: '/images/illustration-grow-followers.webp',
  },
  {
    heading: '&gt;56% <span>faster audience growth</span>',
    image: '/images/illustration-audience-growth.webp',
  },
  {
    heading: 'Create and schedule content <span>quicker.</span>',
    image: '/images/illustration-create-post.webp',
  },
  {
    heading: 'Write your content using AI.',
    image: '/images/illustration-ai-content.webp',
  },
];

const BentoGrid = () => {
  return (
    <main>
      <div className="bento-grid">
        {bentoData.map((item, index) => (
          <BentoItem
            key={index}
            heading={item.heading}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
};

export default BentoGrid;
