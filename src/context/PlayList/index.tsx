import { useGetSongs } from '$/core/services/songs/service';
import { Song } from '$/model/song';
import {
  createContext,
  ReactElement,
  Reducer,
  useContext,
  useEffect,
  useReducer,
} from 'react';

import { reducer } from './reducer';
import { Action, ActionType, PlayListContextType } from './types';

const isClientSide = typeof window !== 'undefined';
const initialState = {
  playList: [],
  favouriteSongs:
    isClientSide && window.localStorage.getItem('favs')
      ? (JSON.parse(localStorage.getItem('favs') as string) as number[])
      : [],
  loading: false,
  setPlaylist: () => {},
  addFavouriteSong: () => {},
  removeFavouriteSong: () => {},
};

export const PlayListContext = createContext<PlayListContextType>(initialState);

export function PlayListProvider({ children }: { children: ReactElement }) {
  const [state, dispatch] = useReducer<Reducer<PlayListContextType, Action>>(
    reducer,
    initialState,
  );

  const { playList, loading } = useGetSongs();

  const setPlaylist = (playlist: Song[]) =>
    dispatch({ type: ActionType.SetPlaylist, payload: { playlist } });
  const addFavouriteSong = (song: Song) =>
    dispatch({ type: ActionType.AddFavoriteSong, payload: { song } });
  const removeFavouriteSong = (song: Song) =>
    dispatch({ type: ActionType.RemoveFavoriteSong, payload: { song } });

  useEffect(() => setPlaylist(playList), [playList]);

  const value: PlayListContextType = {
    setPlaylist,
    addFavouriteSong,
    removeFavouriteSong,
    loading,
    playList: state.playList,
    favouriteSongs: state.favouriteSongs,
  };

  return (
    <PlayListContext.Provider value={value}>
      {children}
    </PlayListContext.Provider>
  );
}

export const usePlayList = () => useContext(PlayListContext);
