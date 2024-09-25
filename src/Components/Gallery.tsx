import React from 'react';
import Image from './Image';
import { type Images } from './Image';

interface GalleryProps {
  images: Images[];
  onClick: (image: Images) => void;
}

const Gallery: React.FC<GalleryProps> = ({ images, onClick }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <Image key={image.src} image={image} onClick={() => onClick(image)} />
      ))}
    </div>
  );
};

export default Gallery;