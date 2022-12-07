import { Song } from '$/model/song';

export type SongDetailProps = {
  className?: string;
  song: Song;
  playing?: boolean;
};
