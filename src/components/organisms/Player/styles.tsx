import { PlayerControls as DefaultPlayerControls } from '$/components/molecules/PlayerControls';
import { PlayerProgressBar as DefaultPlayerProgressBar } from '$/components/molecules/PlayerProgressBar';
import { SongPlayerThumbnail as DefaultSongPlayerThumbnail } from '$/components/molecules/SongPlayerThumbnail';
import { SongPlayerThumbnailPlaceholder as DefaultSongPlayerThumbnailPlaceholder } from '$/components/molecules/SongPlayerThumbnailPlaceholder';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  border: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.color.grayscale900};
  border-radius: 1rem 1rem 0 0;
  overflow: hidden;
  padding: 0.375rem;

  ${from['mobile']} {
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
  }
`;

export const PlayerControls = styled(DefaultPlayerControls)``;
export const PlayerProgressBar = styled(DefaultPlayerProgressBar)`
  display: none;
  ${from['tabletLandscape']} {
    display: flex;
    max-width: 37.5rem;
  }
`;
export const SongPlayerThumbnail = styled(DefaultSongPlayerThumbnail)``;
export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
`;

export const SongPlayerThumbnailPlaceholder = styled(
  DefaultSongPlayerThumbnailPlaceholder,
)``;
