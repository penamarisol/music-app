import { FavouriteIcon } from '$/components/atoms/Favourite/types';

export type SongDetailProps = {
  className?: string;
  url: string;
  alt: string;
  title: string;
  author: string;
  description: string;
  genre: string;
  seconds: number;
  playing: boolean;
  icon: FavouriteIcon;
};
