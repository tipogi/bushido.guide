export enum FolderType {
  // This type of folder is the ROOT of the tree
  ROOT = 'ROOT',
  // This type of folder is has more folders inside
  BRANCH = 'BRANCH',
  // It is the last folder, before the leaf card
  LEAF = 'LEAF'
}