import React from 'react';

export interface Images {
  src: string;
  title: string;
  description: string;
}

interface ImageProps {
  image: Images;
  onClick: () => void;
}

const Image: React.FC<ImageProps> = ({ image, onClick }) => {
  return (
    <img src={image.src} alt={image.title} title={image.title} onClick={onClick} />
  );
};

export default Image;