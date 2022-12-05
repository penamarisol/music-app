type Thumbnail = { url: string; alt: string };
type Audio = { url: string; seconds: number };

export type Song = {
  id: number;
  title: string;
  description: string;
  genre: string;
  image: Thumbnail;
  author: string;
  audio: Audio;
};