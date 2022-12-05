export type SongElementResponse = {
  id: number;
  name: string;
  description: string;
  genre: string;
  image: string;
  author: {
    id: number;
    name: string;
  };
  audio: {
    id: number;
    url: string;
  };
};

export type SongsResponse = {
  songs: { songs: SongElementResponse[] };
};
