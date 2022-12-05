import { Action, ActionType, PlayListContextType } from './types';

export const reducer = (state: PlayListContextType, action: Action) => {
  switch (action.type) {
    case ActionType.AddFavoriteSong:
      const favouriteSongs = [...state.favouriteSongs, action.payload.song.id];
      localStorage.setItem('favs', JSON.stringify(favouriteSongs));
      return {
        ...state,
        favouriteSongs,
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
