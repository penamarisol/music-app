const SECONDS_IN_ONE_MINUTE = 60;

export const useLogic = () => {
  const convertSecondsToMinutes = (seconds: number) =>
    Math.round(seconds / SECONDS_IN_ONE_MINUTE);

  return {
    convertSecondsToMinutes,
  };
};
