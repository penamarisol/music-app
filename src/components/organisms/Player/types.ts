import { Song } from '$/model/song';

export type PlayerProps = {
  className?: string;
  url?: string;
  alt?: string;
  title?: string;
  description?: string;
  progress?: number;
  maxProgress?: number;
  song?: Song;
};
