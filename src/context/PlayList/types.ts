import { Song } from '$/model/song';

export type PlayListContextType = {
  playList: Song[];
  favouriteSongs: number[];
  currentSongPlayer?: Song;
  loading: boolean;
  playing: boolean;
  setPlaylist: (playlist: Song[]) => void;
  addFavouriteSong: (song: Song) => void;
  removeFavouriteSong: (song: Song) => void;
  setCurrentSongPlayer: (song: Song) => void;
  playSong: () => void;
  pauseSong: () => void;
  skipForward: () => void;
  skipBackward: () => void;
};

export enum ActionType {
  SetPlaylist = 'SET_PLAYLIST',
  AddFavoriteSong = 'ADD_FAVORITE_SONG',
  RemoveFavoriteSong = 'REMOVE_FAVORITE_SONG',
  SetCurrentSongPlayer = 'SET_CURRENT_SONG',
  PlaySong = 'PLAY_SONG',
  PauseSong = 'PAUSE_SONG',
  SkipForward = 'SKIP_FORWARD',
  SkipBackward = 'SKIP_BACKWARD',
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
  [ActionType.SetCurrentSongPlayer]: SongPayload;
  [ActionType.PlaySong]: undefined;
  [ActionType.PauseSong]: undefined;
  [ActionType.SkipForward]: undefined;
  [ActionType.SkipBackward]: undefined;
};

export type Action = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  };
}[keyof ActionsMap];
