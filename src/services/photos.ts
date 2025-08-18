import axios from "axios";
import type { Photo } from "../types/type";

const API_KEY = import.meta.env.VITE_PEXELS_KEY;
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};
interface PexelsResponse {
  photos: Photo[];
  total_results: number;
  per_page: number;
}
interface PhotosResults {
  photos: Photo[];
  totalPages: number;
}

export const getPhotos = async (
  query: string,
  page: number,
): Promise<PhotosResults> => {
  const { data } = await axios.get<PexelsResponse>(
    `search?query=${query}&page=${page}`,
  );
  return {
    photos: data.photos,
    totalPages: Math.ceil(data.total_results / data.per_page),
  };
};
