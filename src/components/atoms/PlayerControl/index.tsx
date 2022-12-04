import dynamic from 'next/dynamic';
import React from 'react';

import { Container } from './styles';
import { PlayerControlProps } from './types';

export const PlayerControl = React.forwardRef<
  HTMLButtonElement,
  PlayerControlProps
>(({ className, icon, size = 'regular', variant = 'dark' }, ref) => {
  const Icon = dynamic(() => import(`$/assets/icons/${icon}.svg`));

  return (
    <Container className={className} $size={size} $variant={variant} ref={ref}>
      <Icon />
    </Container>
  );
});