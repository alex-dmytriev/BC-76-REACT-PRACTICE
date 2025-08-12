import { useEffect } from "react";
import type { Photo } from "../../types/type";
import css from "./PhotoModal.module.css";

interface PhotoModalProps {
  selectedPhoto: Photo;
  closeModal: () => void;
}

const PhotoModal = ({ selectedPhoto, closeModal }: PhotoModalProps) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <img width="70%" src={selectedPhoto.src.large} alt={selectedPhoto.alt} />
    </div>
  );
};

export default PhotoModal;
