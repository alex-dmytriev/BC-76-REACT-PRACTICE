import type { Photo } from "../../types/type";
import css from "./PhotosGallery.module.css";
interface PhotosGalleryProps {
  photos: Photo[];
  handlePhotoClick: (photo: Photo) => void;
}
const PhotosGallery = ({ photos, handlePhotoClick }: PhotosGalleryProps) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li className={css.item} key={photo.id}>
          <div
            className={css.thumb}
            style={{
              borderColor: photo.avg_color,
              backgroundColor: photo.avg_color,
            }}
          >
            <img
              onClick={() => handlePhotoClick(photo)}
              src={photo.src.small}
              alt={photo.alt}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PhotosGallery;
