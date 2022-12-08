import { Image } from '$/components/atoms/Image';
import { Text } from '$/components/atoms/Text';
import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.color.grayscale900};
`;

export const SongDescription = styled(Text)`
  color: ${({ theme }) => theme.color.grayscale200};
`;
export const SongTitle = styled(Text)`
  color: ${({ theme }) => theme.color.white};
`;
export const TextContainer = styled.div`
  display: none;

  ${from['mobile']} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Thumbnail = styled(Image)``;
