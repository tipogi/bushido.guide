// SVG
export const SVG = 'svg';
export const BITCOIN = 'bitcoin';
export const PRIVACY = 'privacy';
export const WALLET = 'wallet';
export const SIDECHAIN = 'sidechain';
export const NODE = 'node';
export const BLOCK = 'block';
export const MINE = 'mine';
//Sound
export const SATOSHI = 'satoshi';
export const HARDWARE = 'hardware';
export const COLD_STORAGE = 'coldStorage'
export const NOT_FOUND = 'notFound';

// ICON
export const REACT_ICON = 'icon';
export const GITHUB = 'github';
export const ANALYSIS = 'analysis';
export const GUIDE = 'guide';
export const DEV = 'dev';
export const ARTICLES = 'articles';
export const MULTIMEDIA = 'multimedia';
export const RESOURCES = 'resources';
export const PODCAST = 'podcast';
export const NEWSLETTER = 'newsletter';
export const NEWS = 'news';
export const SWAP = 'swap';
export const P2P = 'p2p';
export const STORE = 'store';
export const SERVICES = 'services';
export const ANIMATION = 'animation';
export const CHARTS = 'charts';
export const METRICS = 'metrics';
export const TOOLS = 'tools';
export const TRANSACTIONS = 'transactions';
export const PEOPLE = 'people';
export const EMAIL = 'email';
export const CRYPTOGRAPHY = 'cryptography';
export const OS = 'os';
export const SMS = 'sms';
export const VPS = 'vps';

// LANGUAGES
export const ENG = 'eng';
export const ESP = 'esp';
export const DEU = 'deu';
export const BR = 'br';


export const getIconType = (name: string): string | undefined => {
  switch (name) {
    // Identify the SVG icons
    case BITCOIN:
    case WALLET:
    case BLOCK:
    case MINE:
    case SATOSHI:
    case HARDWARE:
    case TRANSACTIONS:
    case COLD_STORAGE:
      return SVG;
    // Identify React Icons
    case GITHUB:
    case ANALYSIS:
    case GUIDE:
    case DEV:
    case ARTICLES:
    case MULTIMEDIA:
    case RESOURCES:
    case PODCAST:
    case NEWSLETTER:
    case NEWS:
    case SWAP:
    case P2P:
    case STORE:
    case SERVICES:
    case EMAIL:
    case ANIMATION:
    case CHARTS:
    case METRICS:
    case TOOLS:
    case PEOPLE:
    case CRYPTOGRAPHY:
    case OS:
    case SMS:
    case VPS:
    case PRIVACY:
    case NODE:
    case SIDECHAIN:
    default:
      return REACT_ICON;
  }
}