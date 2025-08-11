import type { Photo } from "../../types/type";
import css from "./PhotosGallery.module.css";
interface PhotosGalleryProps {
  photos: Photo[];
}
const PhotosGallery = ({ photos }: PhotosGalleryProps) => {
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
            <img src={photo.src.small} alt={photo.alt} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PhotosGallery;
