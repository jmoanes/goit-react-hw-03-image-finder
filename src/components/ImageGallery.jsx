import React from "react";
import "./styles.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="Gallery">
      {images.map((img) => (
        <li
          key={img.id}
          className="Gallery-item"
          onClick={() => onImageClick(img.largeImageURL)} // send big image URL
        >
          <img src={img.webformatURL} alt={img.tags} />
        </li>
      ))}
    </ul>
  );
}
