export const useLogic = () => {
  const calculateProgress = (value: number, maxProgress: number) =>
    (value / maxProgress) * 100;

  return {
    calculateProgress,
  };
};
