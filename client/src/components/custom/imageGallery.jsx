import { useEffect, useRef, useState } from "react";
import Product1 from "../../assets/product-1.jpg";

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const images = [
    Product1,
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png",
  ];

  const goToSlide = (index) => {
    const slideWidth = sliderRef.current.clientWidth;
    sliderRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalSlides;
      goToSlide(nextSlide);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    // Initialize first slide on mount
    goToSlide(currentSlide);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-2xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full flex-shrink-0 rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center mt-5 space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
              currentSlide === idx ? "bg-black" : "bg-black/20"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
