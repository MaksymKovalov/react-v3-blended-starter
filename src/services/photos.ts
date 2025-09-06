import axios from "axios";
import { PhotosResponse } from "../types/photo";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

export const getPhotos = async (query: string): Promise<PhotosResponse> => {
  const response = await axios.get<PhotosResponse>(`search?query=${query}`);
  return response.data;
};
