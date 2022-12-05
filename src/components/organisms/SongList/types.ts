type SongData = {
  url: string;
  alt: string;
  title: string;
  author: string;
  description: string;
  genre: string;
  seconds: number;
};

export type SongsListProps = {
  className?: string;
  songs: Array<SongData>;
};
