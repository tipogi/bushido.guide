import MainCard from '../templates/cards/MainCard';
import { 
  ANALYSIS, BITCOIN, ABSOLUTE, GITHUB, RELATIVE, PRIVACY, SVG, WALLET, GUIDE, DEV,
  ARTICLES, MULTIMEDIA, RESOURCES, PODCAST, SUBSTACK, SIDECHAIN, NEWS, SWAP, P2P, 
  NODE, STORE, SERVICES, EMAIL, ANIMATION, CHARTS, BLOCK, METRICS, MINE, SATOSHI, HARDWARE, TOOLS, TRANSACTIONS, PEOPLE, COLD_STORAGE, CRYPTOGRAPHY, OS, SMS, VPS
} from '../../constants';
import './styles/explorer.scss';
import FolderCard from '../templates/cards/FolderCard';

const Explorer: React.FC = () => {
  return (
    <div id="explorer-container" className='block'>
      <div id="cards-container">
        <FolderCard icon={PEOPLE} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={COLD_STORAGE} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={CRYPTOGRAPHY} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={OS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={SMS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={VPS} folderType={RELATIVE} maxCard={12}/>
      </div>
    </div>
  )
}

export default Explorer;


/*Main cards
  <MainCard icon={BITCOIN}/>
  <MainCard icon={PRIVACY}/>
*/
/* Folder cards: Make a folder-container element
  <FolderCard icon={GITHUB} folderType={ABSOLUTE} maxCard={6}/>
  <FolderCard icon={WALLET} folderType={ABSOLUTE} iconType={SVG} maxCard={6}/>
  <FolderCard icon={ANALYSIS} folderType={ABSOLUTE} maxCard={6}/>
*/
/* Gaia Cards
        <FolderCard icon={GUIDE} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={DEV} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={ARTICLES} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={MULTIMEDIA} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={RESOURCES} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={PODCAST} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={SUBSTACK} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={SIDECHAIN} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={NEWS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={SWAP} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={P2P} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={NODE} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={STORE} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={SERVICES} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={EMAIL} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={ANIMATION} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={CHARTS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={BLOCK} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={METRICS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={MINE} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={SATOSHI} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={HARDWARE} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={TOOLS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={TRANSACTIONS} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
*/
