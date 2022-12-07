import { Song } from '$/model/song';

export type PlayListContextType = {
  playList: Song[];
  favouriteSongs: number[];
  loading: boolean;
  setPlaylist: (playlist: Song[]) => void;
  addFavouriteSong: (song: Song) => void;
  removeFavouriteSong: (song: Song) => void;
};

export enum ActionType {
  SetPlaylist = 'SET_PLAYLIST',
  AddFavoriteSong = 'ADD_FAVORITE_SONG',
  RemoveFavoriteSong = 'REMOVE_FAVORITE_SONG',
}

type SongPayload = {
  song: Song;
};

type PlaylistPayload = {
  playlist: Song[];
};

export type ActionsMap = {
  [ActionType.SetPlaylist]: PlaylistPayload;
  [ActionType.AddFavoriteSong]: SongPayload;
  [ActionType.RemoveFavoriteSong]: SongPayload;
};

export type Action = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  };
}[keyof ActionsMap];
