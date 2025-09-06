export interface Photo {
  id: string;
  avg_color: string;
  alt: string;
  src: {
    large: string;
    original: string;
  };
}

export interface PhotosResponse {
  photos: Photo[];
  total_results: number;
  page: number;
  per_page: number;
  next_page?: string;
}
