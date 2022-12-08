export enum ControlType {
  PLAY = 'play',
  PAUSE = 'pause',
}

export type SongDescriptionProps = {
  className?: string;
  genre: string;
  seconds: number;
  playing: boolean;
  loading?: boolean;
  onClickControl: (controlType: ControlType) => void;
};
