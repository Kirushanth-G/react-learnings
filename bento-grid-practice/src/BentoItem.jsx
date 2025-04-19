import React from 'react';

const BentoItem = ({ heading, image, description }) => {
  return (
    <div>
      {heading && <h2 dangerouslySetInnerHTML={{ __html: heading }} />}
      {image && <img src={image} alt="ondum varala" />}
      {description && <p>{description}</p>}
    </div>
  );
};

export default BentoItem;
