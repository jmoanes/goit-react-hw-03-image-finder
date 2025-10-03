import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import Button from "./components/Button";
import Modal from "./components/Modal";

const API_KEY = "50691194-26f992ad166ae576dbf185fc0"; // ← replace with your Pixabay API key
const BASE_URL = "https://pixabay.com/api/";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages((prev) => [...prev, ...data.hits]);
      })
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <Button onClick={() => setPage((prev) => prev + 1)} />
      )}
      {selectedImage && (
        <Modal onClose={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Large preview" />
        </Modal>
      )}
    </div>
  );
}
