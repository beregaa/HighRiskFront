"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "/public/Banner.png";

import styles from "./ImageSlideshow.module.scss";

const images = [
  { image: Banner, alt: "banner" },
  { image: Banner, alt: "banner" },
];

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
