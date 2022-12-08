import { Action, ActionType, PlayListContextType } from './types';

export const reducer = (state: PlayListContextType, action: Action) => {
  switch (action.type) {
    case ActionType.AddFavoriteSong:
      return {
        ...state,
        favouriteSongs: [...state.favouriteSongs, action.payload.song.id],
      };
    case ActionType.RemoveFavoriteSong:
      return {
        ...state,
        favouriteSongs: [...state.favouriteSongs].filter(
          (songId) => action.payload.song.id !== songId,
        ),
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
    case ActionType.SkipForward:
      const nextSongIndex = state.playList.findIndex(
        (s) => s.id === state.currentSongPlayer?.id,
      );
      const nextSong = state.playList[nextSongIndex + 1] || state.playList[0];

      return { ...state, currentSongPlayer: nextSong };
    case ActionType.SkipBackward:
      const previousSongIndex = state.playList.findIndex(
        (s) => s.id === state.currentSongPlayer?.id,
      );
      const previousSong =
        state.playList[previousSongIndex - 1] ||
        state.playList[state.playList.length - 1];

      return { ...state, currentSongPlayer: previousSong };
    default:
      return state;
  }
};
