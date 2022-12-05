import { getSongsQuery } from '$/core/queries/songs.query';
import { SongsResponse } from '$/types/songs.types';
import { useQuery } from '@apollo/client';

export const useGetSongs = () => {
  const { data, error, loading } = useQuery<SongsResponse>(getSongsQuery);

  return { songsList: data?.songs.songs, error, loading };
};
