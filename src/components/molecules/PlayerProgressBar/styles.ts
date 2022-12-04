import { ProgressBar as DefaultProgressBar } from '$/components/atoms/ProgressBar';
import { Text as DefaultText } from '$/components/atoms/Text';
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

export const Text = styled(DefaultText)`
  color: ${({ theme }) => theme.color.white};
  width: 1.75rem;
`;
export const ProgressBar = styled(DefaultProgressBar)``;
