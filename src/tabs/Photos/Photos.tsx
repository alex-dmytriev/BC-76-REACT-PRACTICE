import { useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { getPhotos } from "../../services/photos";
import type { Photo } from "../../types/type";
import PhotosGallery from "../../components/PhotosGallery/PhotosGallery";
import PhotoModal from "../../components/PhotoModal/PhotoModal";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import toast from "react-hot-toast";

const Photos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (value: string) => {
    setIsEmpty(false);
    setPhotos([]);
    setIsLoading(true);
    setIsError(false);
    try {
      const data = await getPhotos(value);
      if (!data.length) {
        //   toast("Photos not found.");
        setIsEmpty(true);
        return;
      }

      setPhotos(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <SearchBox handleSubmit={handleSubmit} />
      {photos.length > 0 && (
        <PhotosGallery handlePhotoClick={handlePhotoClick} photos={photos} />
      )}
      {isEmpty && <p>Photos not found</p>}
      {isError && <ErrorMessage />}
      {selectedPhoto && (
        <PhotoModal closeModal={closeModal} selectedPhoto={selectedPhoto} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Photos;
