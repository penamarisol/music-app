import { Action, ActionType, PlayListContextType } from './types';

export const reducer = (state: PlayListContextType, action: Action) => {
  switch (action.type) {
    case ActionType.AddFavoriteSong:
      const favsWithAddedSong = [
        ...state.favouriteSongs,
        action.payload.song.id,
      ];
      return {
        ...state,
        favouriteSongs: favsWithAddedSong,
      };
    case ActionType.RemoveFavoriteSong:
      const favsWithoutRemovedSong = [...state.favouriteSongs].filter(
        (songId) => action.payload.song.id !== songId,
      );
      return {
        ...state,
        favouriteSongs: favsWithoutRemovedSong,
      };
    case ActionType.SetPlaylist:
      return {
        ...state,
        playList: action.payload.playlist,
      };
    case ActionType.SetCurrentSongPlayer:
      return { ...state, currentSongPlayer: action.payload.song };
    case ActionType.PlaySong:
      return { ...state, playing: true };
    case ActionType.PauseSong:
      return { ...state, playing: false };
    default:
      return state;
  }
};
