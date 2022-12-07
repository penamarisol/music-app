import dynamic from 'next/dynamic';
import React from 'react';

import { Container } from './styles';
import { FavouriteProps } from './types';

export const Favourite = React.forwardRef<HTMLButtonElement, FavouriteProps>(
  ({ className, icon, onClickFavourite }, ref) => {
    const Icon = dynamic(() => import(`$/assets/icons/${icon}.svg`));

    return (
      <Container className={className} ref={ref} onClick={onClickFavourite}>
        <Icon />
      </Container>
    );
  },
);
