import { 
  ANALYSIS, ARTICLES, DEV, GITHUB, GUIDE, MULTIMEDIA, NEWS, P2P, PODCAST, RESOURCES, SERVICES, STORE, SUBSTACK, SWAP, EMAIL, ANIMATION, CHARTS, METRICS, TOOLS, PEOPLE, CRYPTOGRAPHY, OS, SMS, VPS, SVG, REACT_ICON,
  BITCOIN, PRIVACY, WALLET, SIDECHAIN, NODE, BLOCK, MINE, SATOSHI, HARDWARE, TRANSACTIONS, COLD_STORAGE
} from "../constants";

export const getIconType = (name: string): string | undefined => {
  switch (name) {
    // Identify the SVG icons
    case BITCOIN:
    case PRIVACY:
    case WALLET:
    case SIDECHAIN:
    case NODE:
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
    case SUBSTACK:
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
    default:
      return REACT_ICON;
  }
}