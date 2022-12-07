import { Container, SongCard } from './styles';
import { SongsListProps } from './types';

export const SongsList = ({ className, songs }: SongsListProps) => (
  <Container className={className}>
    {songs.map((song) => (
      <SongCard key={`song-element-${song.id}`} song={song} />
    ))}
  </Container>
);
