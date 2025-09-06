import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import type { Photo } from "../../types/photo";

interface PhotosGalleryProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export default function PhotosGallery({
  photos,
  onPhotoClick,
}: PhotosGalleryProps) {
  if (photos.length === 0) return null;

  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem photo={photo} onPhotoClick={onPhotoClick} />
        </GridItem>
      ))}
    </Grid>
  );
}
