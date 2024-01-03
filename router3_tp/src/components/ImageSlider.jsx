import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    let autoSlideTimer;
    const startAutoSlide = () => {
      autoSlideTimer = setInterval(goToNextSlide, autoSlideInterval);
    };
    const stopAutoSlide = () => {
      clearInterval(autoSlideTimer);
    };
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [currentIndex, autoSlideInterval, images.length]);

  return (
    <div className="image-slider mb-4">
      <img src={require(`../images/${images[currentIndex]}`)} alt={`Slide ${currentIndex + 1}`} width='100%' height='500vh'/>
    </div>
  );
};

export default ImageSlider;
