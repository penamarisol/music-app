import { PlayerControl } from '$/components/atoms/PlayerControl';
import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 1.313rem;
  padding: 0.625rem;
  background-color: ${({ theme }) => theme.color.grayscale900};
`;

export const Play = styled(PlayerControl)``;
export const Pause = styled(PlayerControl)``;
export const SkipBackward = styled(PlayerControl)``;
export const SkipForward = styled(PlayerControl)``;
