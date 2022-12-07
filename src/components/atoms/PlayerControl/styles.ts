import styled, { css } from 'styled-components';

import {
  $StyledProps,
  PlayerControlSize,
  PlayerControlVariant,
  SizeTheme,
  VariantTheme,
} from './types';

const variantTheme: Record<PlayerControlVariant, VariantTheme> = {
  dark: {
    backgroundColor: 'grayscale900',
    color: 'white',
  },
  light: { backgroundColor: 'white', color: 'grayscale900' },
};

const sizeTheme: Record<PlayerControlSize, SizeTheme> = {
  regular: { buttonSize: '2.5rem', iconSize: '1.5rem' },
  small: { buttonSize: '2rem', iconSize: '1rem' },
};

export const Container = styled.button<$StyledProps>`
  ${({ $size }) =>
    $size &&
    css`
      width: ${sizeTheme[$size].buttonSize};
      height: ${sizeTheme[$size].buttonSize};

      svg {
        width: ${sizeTheme[$size].iconSize};
        height: ${sizeTheme[$size].iconSize};
      }
    `}
  border: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 2.75rem;
  cursor: pointer;
  ${({ theme, $variant }) =>
    $variant &&
    css`
      background-color: ${theme.color[variantTheme[$variant].backgroundColor]};
      svg {
        path {
          fill: ${theme.color[variantTheme[$variant].color]};
        }
      }
    `}
`;
