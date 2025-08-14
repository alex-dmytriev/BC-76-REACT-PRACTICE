import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { getPhotos } from "../../services/photos";
import type { Photo } from "../../types/type";
import PhotosGallery from "../../components/PhotosGallery/PhotosGallery";
import PhotoModal from "../../components/PhotoModal/PhotoModal";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const PhotosTanstack = () => {
  const [query, setQuery] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [page, setPage] = useState(1);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["photos", query, page],
    queryFn: () => getPhotos(query, page),
    enabled: query !== "",
  });

  useEffect(() => {
    if (isSuccess && data.length === 0) {
      toast.error("Not found photos");
    }
  }, [data, isSuccess]);

  const handleSubmit = async (value: string) => {
    setQuery(value);
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
      {isSuccess && data.length > 0 && (
        <PhotosGallery handlePhotoClick={handlePhotoClick} photos={data} />
      )}
      {selectedPhoto && (
        <PhotoModal closeModal={closeModal} selectedPhoto={selectedPhoto} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isSuccess && data.length > 0 && (
        <button onClick={() => setPage(page + 1)}>Load more</button>
      )}
    </div>
  );
};

export default PhotosTanstack;
