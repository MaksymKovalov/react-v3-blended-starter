import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";

import { getPhotos } from "../../services/photos";
import type { Photo } from "../../types/photo";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getPhotos(query);
      
      if (response.photos.length === 0) {
        toast.error("No photos found for your search query");
        setPhotos([]);
      } else {
        setPhotos(response.photos);
        toast.success(`Found ${response.photos.length} photos!`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch photos";
      setError(errorMessage);
      toast.error(errorMessage);
      setPhotos([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoClick = (photo: Photo): void => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = (): void => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={handleSearch} />
          
          {isLoading && <Loader />}
          
          {error && (
            <Text textAlign="center">
              Error: {error}
            </Text>
          )}
          
          <PhotosGallery 
            photos={photos} 
            onPhotoClick={handlePhotoClick} 
          />
          
          {selectedPhoto && (
            <Modal onClose={handleCloseModal}>
              <img 
                src={selectedPhoto.src.original} 
                alt={selectedPhoto.alt} 
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Modal>
          )}
        </Container>
      </Section>
      
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
}
