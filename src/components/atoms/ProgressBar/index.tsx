import React, { useEffect, useMemo, useState } from 'react';

import { useLogic } from './logic';
import { Container } from './styles';
import { ProgressBarProps } from './types';

export const ProgressBar = React.forwardRef<HTMLInputElement, ProgressBarProps>(
  ({ className, progress, maxProgress, onChange }, ref) => {
    const [currentProgress, setCurrentProgress] = useState<number>(progress);
    const { calculateProgress } = useLogic();

    useEffect(() => setCurrentProgress(progress), [progress]);

    const sliderProgress = useMemo(
      () => calculateProgress(currentProgress, maxProgress),
      [currentProgress, maxProgress, calculateProgress],
    );

    return (
      <Container
        type="range"
        value={currentProgress}
        className={className}
        $sliderProgress={sliderProgress}
        ref={ref}
        max={maxProgress}
        min={0}
        step={0.25}
        onChange={(ev) => onChange(parseInt(ev.target.value))}
      />
    );
  },
);
