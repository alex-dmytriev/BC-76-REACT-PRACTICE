import { useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { getPhotos } from "../../services/photos";
import type { Photo } from "../../types/type";
import PhotosGallery from "../../components/PhotosGallery/PhotosGallery";

const Photos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const handleSubmit = async (value: string) => {
    const data = await getPhotos(value);
    setPhotos(data);
  };
  console.log(photos);

  return (
    <div>
      <SearchBox handleSubmit={handleSubmit} />
      {photos.length > 0 && <PhotosGallery photos={photos} />}
    </div>
  );
};

export default Photos;
