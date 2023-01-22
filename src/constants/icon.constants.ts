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
export const LINUX = 'linux';
export const MEMPOOL = 'mempool';
export const CARD = 'card';
export const SOFTWARE = 'software';
export const MEETUPS = 'meetups';
export const ENERGY = 'energy';
export const CHANNELS = 'channels';
export const ECONOMY = 'economy';
export const MIND = 'mind';
export const IT = 'it';
export const BOOM = 'boom';
export const ANDROID = 'android';
export const MAC = 'mac';
export const WEB = 'web';
export const PRACTISE = 'practise';
export const COURSES = 'courses';
// Nostr ostrich
export const NOSTR = 'nostr';
export const APP = 'apps';
export const REGISTRY = 'registry';
export const AI = 'ai';
export const EXT = 'extension';
export const ARCH = 'architecture';
export const NET = 'network';
export const FULLSTACK = 'fullstack';
export const SECURITY = 'security';
export const DEVOPS = 'devops';


// LANGUAGES
export const ENG = 'eng';
export const ESP = 'esp';
export const DEU = 'deu';
export const BR = 'br';
export const DE = 'de';
export const FR = 'fr';


export const getIconType = (name: string): string | undefined => {
  switch (name) {
    // Identify the SVG icons
    case BLOCK:
    case SATOSHI:
        return SVG;
        // Identify React Icons
    case BITCOIN:
    case COLD_STORAGE:
    case GITHUB:
    case HARDWARE:
    case TRANSACTIONS:
    case MINE:
    case WALLET:
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
    case SOFTWARE:
    case NOSTR:
    default:
      return REACT_ICON;
  }
}