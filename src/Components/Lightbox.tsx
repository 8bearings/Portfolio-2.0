import React, { useState } from 'react';
import { type Images } from './Image';

interface LightboxProps {
  images: Images[];
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`lightbox ${isOpen ? 'open' : ''}`}>
      <div className="lightbox-content">
        <img src={images[currentIndex].src} alt={images[currentIndex].title} />
        <button className="lightbox-prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="lightbox-next" onClick={handleNext}>
          &#10095;
        </button>
        <button className="lightbox-close" onClick={handleClose}>
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;