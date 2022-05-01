export const getRandomInt = (MIN_NUMBER: number, MAX_NUMBER: number) => {
  const min = Math.ceil(MIN_NUMBER);
  const max = Math.floor(MAX_NUMBER);
  return Math.floor(Math.random() * (max - min) + min);
}