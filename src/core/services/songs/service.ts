import { getSongsQuery } from '$/core/queries/songs.query';
import { Song } from '$/model/song';
import { ApolloError, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

import { listMapper } from './mapper';
import { SongsResponse } from './types';

export const useGetSongs = (): {
  playList: Song[] | [];
  error?: ApolloError;
  loading: boolean;
} => {
  const [playList, setPlayList] = useState<Song[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { data, error } = useQuery<SongsResponse>(getSongsQuery);

  useEffect(() => {
    const list = data?.songs.songs || [];
    listMapper(list)
      .then((response) => {
        setPlayList(response);
        if (response.length > 0) setLoading(false);
      })
      .catch(() => {
        setPlayList([]);
        setLoading(false);
      });
  }, [data]);

  return { playList, error, loading };
};
