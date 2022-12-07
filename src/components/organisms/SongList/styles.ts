import { SongDetail } from '$/components/organisms/SongDetail';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  border: none;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const SongCard = styled(SongDetail)``;
