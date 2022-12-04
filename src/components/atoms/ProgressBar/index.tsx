import React, { useEffect, useMemo, useState } from 'react';

import { useLogic } from './logic';
import { Container } from './styles';
import { ProgressBarProps } from './types';

export const ProgressBar = React.forwardRef<HTMLInputElement, ProgressBarProps>(
  ({ className, progress, maxProgress }, ref) => {
    const [currentProgress, setCurrentProgress] = useState<number>(progress);
    const { calculateProgress } = useLogic();

    useEffect(() => setCurrentProgress(progress), [progress]);

    const sliderProgress = useMemo(
      () => calculateProgress(currentProgress, maxProgress),
      [currentProgress],
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
        step={1}
        onChange={(ev) => setCurrentProgress(parseInt(ev.target.value))}
      />
    );
  },
);
