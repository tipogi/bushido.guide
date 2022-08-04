export enum CardType {
  // This type of folder is the ROOT of the tree
  ROOT = 'Root',
  // This type of folder is has more folders inside
  BRANCH = 'Branch',
  // It is the last folder, before the leaf card
  LEAF = 'Leaf'
}