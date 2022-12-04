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

const sizeButtonTheme: Record<PlayerControlSize, SizeTheme> = {
  regular: { buttonSize: '2.5rem', iconSize: '1.5rem' },
  small: { buttonSize: '2rem', iconSize: '1rem' },
};

export const Container = styled.button<$StyledProps>`
  ${({ $size }) =>
    $size &&
    css`
      width: ${sizeButtonTheme[$size].buttonSize};
      height: ${sizeButtonTheme[$size].buttonSize};

      svg {
        width: ${sizeButtonTheme[$size].iconSize};
        height: ${sizeButtonTheme[$size].iconSize};
      }
    `}
  border: none;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.malibu100};
  padding: 0.5rem;
  border-radius: 2.75rem;
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
