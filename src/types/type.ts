export type VariantsTypes = "smooth" | "okey" | "ride" | "clear";
export type MoodTypes = "smooth" | "okey" | "ride";

export interface Mood {
  smooth: number;
  okey: number;
  ride: number;
}
export interface Photo {
  alt: string;
  avg_color: string;
  id: number;
  src: {
    large: string;
    small: string;
  };
}
