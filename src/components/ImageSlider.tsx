import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

interface Image {
  src: string;
  scale?: number;
  objectPositionX?: number;
  objectPositionY?: number;
}

interface ImageSliderProps {
  images: Image[];
  autoCycle?: boolean;
  cycleInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoCycle = false,
  cycleInterval = 3000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoCycle) {
      interval = setInterval(() => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }, cycleInterval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoCycle, cycleInterval, currentImageIndex, images.length]);

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    const nextIndex = currentImageIndex - 1;
    setCurrentImageIndex(nextIndex < 0 ? images.length - 1 : nextIndex);
  };

  const currentImage = images[currentImageIndex];
  const scale = currentImage.scale || 1;
  const objectPositionX = currentImage.objectPositionX || 50;
  const objectPositionY = currentImage.objectPositionY || 50;
  const objectPosition = `${objectPositionX}% ${objectPositionY}%`;

  return (
    <div className="image-slider">
      <button className="prev-btn" onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className="next-btn" onClick={handleNextClick}>
        &#10095;
      </button>
      <div
        className="image-wrapper"
        style={{
          transform: `scale(${scale})`,
          objectPosition: objectPosition,
        }}
      >
        <img src={currentImage.src} alt="slider" />
      </div>
    </div>
  );
};

export default ImageSlider;
