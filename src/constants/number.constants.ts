import { CardType } from '~/constants';

const MIN_NUMBER = 1;

export const getRandomInt = (folderType: CardType) => {
  const min = Math.ceil(MIN_NUMBER);
  const max = Math.floor(getMaxNumber(folderType));
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Get a number to add as card background
 * Always max number has to be one more
 * @param folderType 
 * @returns 
 */
const getMaxNumber = (folderType: CardType) => {
  switch (folderType) {
    case CardType.ROOT:
      return 6;
    case CardType.BRANCH:
      return 6;
    case CardType.LEAF:
      return 12;
    default:
      return 0;
  }
}