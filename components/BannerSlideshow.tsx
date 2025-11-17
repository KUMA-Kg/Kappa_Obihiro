'use client';

import { useState, useEffect } from 'react';

const bannerImages = [
  '/images/main-image1.jpg',
  '/images/main-image2.jpg',
];

export default function BannerSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {bannerImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`バナー${index + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      
      {/* インジケーター */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 10
      }}>
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: currentIndex === index ? '32px' : '12px',
              height: '12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: currentIndex === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label={`スライド${index + 1}へ移動`}
          />
        ))}
      </div>
    </div>
  );
}