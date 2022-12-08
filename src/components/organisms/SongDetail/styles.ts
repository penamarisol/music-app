import { Favourite as DefaultFavourite } from '$/components/atoms/Favourite';
import { Image as DefaultImage } from '$/components/atoms/Image';
import { Text as DefaultText } from '$/components/atoms/Text';
import { SongDescription as DefaultSongDescription } from '$/components/molecules/SongDescription';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  border: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1.313rem;
  padding: 0.625rem;
`;

export const DescriptionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: center;
  max-width: 15rem;

  ${from['mobile']} {
    max-width: 37.5rem;
  }
`;
export const Favourite = styled(DefaultFavourite)``;
export const Image = styled(DefaultImage)`
  width: 6rem;
  height: 6rem;
  ${from['mobile']} {
    width: 7rem;
    height: 7rem;
  }

  ${from['tabletPortrait']} {
    width: 8.75rem;
    height: 8.75rem;
  }
`;
export const SongDescription = styled(DefaultSongDescription)`
  padding-top: 0.5rem;
`;
export const Text = styled(DefaultText)``;
export const Wrapper = styled.div`
  width: auto;
  height: auto;
  border: none;
  display: inline-flex;
  flex-direction: column;
  gap: 1.313rem;
  padding: 0.625rem;

  ${from['mobile']} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  ${from['tabletLandscape']} {
    align-items: center;
  }
`;
