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
    default:
      return state;
  }
};
