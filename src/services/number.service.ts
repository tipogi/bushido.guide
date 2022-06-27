import { FolderType } from "../constants";

const MIN_NUMBER = 1;

export const getRandomInt = (folderType: FolderType) => {
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
const getMaxNumber = (folderType: FolderType) => {
  switch (folderType) {
    case FolderType.ROOT:
      return 6;
    case FolderType.BRANCH:
      return 6;
    case FolderType.LEAF:
      return 12;
    default:
      return 0;
  }
}