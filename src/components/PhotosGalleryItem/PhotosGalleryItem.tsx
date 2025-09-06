import styles from "./PhotosGalleryItem.module.css";
import type { Photo } from "../../types/photo";
import type { MouseEvent } from "react";

interface PhotosGalleryItemProps {
  photo: Photo;
  onPhotoClick: (photo: Photo) => void;
}

export default function PhotosGalleryItem({
  photo,
  onPhotoClick,
}: PhotosGalleryItemProps) {
  const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    onPhotoClick(photo);
  };

  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: photo.avg_color,
        borderColor: photo.avg_color,
      }}
      onClick={handleClick}
    >
      <img src={photo.src.large} alt={photo.alt} />
    </div>
  );
}
