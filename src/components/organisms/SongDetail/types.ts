import { FavouriteIcon } from '$/components/atoms/Favourite/types';
import { Song } from '$/model/song';

export type SongDetailProps = {
  className?: string;
  song: Song;
  playing?: boolean;
  icon?: FavouriteIcon;
};
