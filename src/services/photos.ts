import axios from "axios";
import type { Photo } from "../types/type";
const API_KEY = import.meta.env.VITE_PEXELS_KEY;
const instance = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: { 'Authorization': API_KEY },
  params: {orientation: "landscape"}
});


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
  const { data } = await instance.get<PexelsResponse>(
    `search?query=${query}&page=${page}`,
  );
  return {
    photos: data.photos,
    totalPages: Math.ceil(data.total_results / data.per_page),
  };
};
