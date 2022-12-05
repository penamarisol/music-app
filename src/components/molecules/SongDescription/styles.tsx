import { PlayerControl } from '$/components/atoms/PlayerControl';
import { Tag } from '$/components/atoms/Tag';
import { Text as DefaultText } from '$/components/atoms/Text';
import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: auto;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
`;

export const GenreLabel = styled(Tag)``;
export const Play = styled(PlayerControl)``;
export const Pause = styled(PlayerControl)``;
export const Text = styled(DefaultText)``;
