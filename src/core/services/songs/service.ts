import { getSongsQuery } from '$/core/queries/songs.query';
import { Song } from '$/model/song';
import { ApolloError, useQuery } from '@apollo/client';
import { useMemo } from 'react';

import { listMapper } from './mapper';
import { SongsResponse } from './types';

export const useGetSongs = (): {
  playList: Song[] | [];
  error?: ApolloError;
  loading: boolean;
} => {
  const { data, error, loading } = useQuery<SongsResponse>(getSongsQuery);

  const playList = useMemo(() => {
    const list = data?.songs.songs || [];

    return listMapper(list);
  }, [data]);

  return { playList, error, loading };
};
