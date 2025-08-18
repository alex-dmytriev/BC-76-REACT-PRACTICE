import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { getPhotos } from "../../services/photos";
import type { Photo } from "../../types/type";
import PhotosGallery from "../../components/PhotosGallery/PhotosGallery";
import PhotoModal from "../../components/PhotoModal/PhotoModal";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Pagination from "../../components/Pagination/Pagination.tsx";
import TaskForm from "../../components/TaskForm/TaskForm.tsx";

const PhotosTanstack = () => {
  const [query, setQuery] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [page, setPage] = useState(1);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["photos", query, page],
    queryFn: () => getPhotos(query, page),
    enabled: query !== "",
    placeholderData: keepPreviousData,
  });
  useEffect(() => {
    if (isSuccess && data?.photos.length === 0) {
      toast.error("Not found photos");
    }
  }, [data, isSuccess]);

  const handleSubmit = async (value: string) => {
    setPage(1);
    setQuery(value);
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };
  const handleChangePage = (page: number) => {
    setPage(page);
    console.log(page);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      <SearchBox handleSubmit={handleSubmit} />
      <TaskForm />
      {isSuccess && data?.photos.length > 0 && (
        <PhotosGallery
          handlePhotoClick={handlePhotoClick}
          photos={data?.photos}
        />
      )}
      {selectedPhoto && (
        <PhotoModal closeModal={closeModal} selectedPhoto={selectedPhoto} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isSuccess && data?.photos.length > 0 && (
        <Pagination
          totalPages={data?.totalPages}
          onChange={handleChangePage}
          page={page}
        />
      )}
    </div>
  );
};

export default PhotosTanstack;
