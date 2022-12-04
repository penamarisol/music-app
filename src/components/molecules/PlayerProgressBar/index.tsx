import { useEffect, useMemo, useState } from 'react';

import { useLogic } from './logic';
import { Container, ProgressBar, Text } from './styles';
import { PlayerProgressBarProps } from './types';

export const PlayerProgressBar = ({
  className,
  progress,
  maxProgress,
}: PlayerProgressBarProps) => {
  const { convertSecondsToMinutes } = useLogic();
  const [currentProgress, setCurrentProgress] = useState<number>(progress);

  useEffect(() => setCurrentProgress(progress), [progress]);
  const maxProgressTrack = useMemo(
    () => convertSecondsToMinutes(maxProgress),
    [maxProgress, convertSecondsToMinutes],
  );

  return (
    <Container className={className}>
      <Text tag="p" variant="caption">
        {convertSecondsToMinutes(currentProgress)}
      </Text>
      <ProgressBar
        progress={currentProgress}
        maxProgress={maxProgress}
        onChange={(value) => setCurrentProgress(value)}
      />
      <Text tag="p" variant="caption">
        {maxProgressTrack}
      </Text>
    </Container>
  );
};
