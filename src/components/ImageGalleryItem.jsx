import React from "react";

export default function ImageGalleryItem({ small, large, tags, onClick }) {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onClick(large)}
      role="button"
      tabIndex={0}
    >
      <img
        src={small}
        alt={tags}
        className="ImageGalleryItem-image"
        loading="lazy"
      />
    </li>
  );
}
