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
  currentSongPlayer: undefined,
  playing: false,
  setPlaylist: () => {},
  addFavouriteSong: () => {},
  removeFavouriteSong: () => {},
  setCurrentSongPlayer: () => {},
  playSong: () => {},
  pauseSong: () => {},
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
  const setCurrentSongPlayer = (song: Song) =>
    dispatch({ type: ActionType.SetCurrentSongPlayer, payload: { song } });
  const playSong = () =>
    dispatch({ type: ActionType.PlaySong, payload: undefined });
  const pauseSong = () =>
    dispatch({ type: ActionType.PauseSong, payload: undefined });

  useEffect(() => {
    setPlaylist(playList);
    if (playList.length > 0) setCurrentSongPlayer(playList[0] as Song);
  }, [playList]);

  const value: PlayListContextType = {
    setPlaylist,
    addFavouriteSong,
    removeFavouriteSong,
    setCurrentSongPlayer,
    playSong,
    pauseSong,
    loading,
    playing: state.playing,
    playList: state.playList,
    favouriteSongs: state.favouriteSongs,
    currentSongPlayer: state.currentSongPlayer,
  };

  return (
    <PlayListContext.Provider value={value}>
      {children}
    </PlayListContext.Provider>
  );
}

export const usePlayList = () => useContext(PlayListContext);
