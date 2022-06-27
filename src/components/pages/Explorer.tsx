import TopicCard from '../templates/cards/TopicCard';
import { useState } from 'react';
import { topic } from '../../data/topic.js';

import './styles/explorer.scss';
import { FolderType } from '../../constants';

export interface Branch {
  name: string
  description: string
  nodeHash: string
  path: string[]
  type: FolderType
  icon: string
}

const Explorer: React.FC = () => {

  const [cards, setCards] = useState<Branch[]>(topic);

  const renderCards = () => {
    return (
      cards.map((card: Branch) => {
        return (
          <TopicCard 
            icon={ card.icon } 
            folderType={card.type} 
            name={card.name}
            description={card.description}
            key={card.nodeHash}
          />
        )
      })
    )
  }

  return (
    <div id="explorer-container" className='block'>
      <div id="cards-container">
        {
          renderCards()
        }
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
        <FolderCard icon={PEOPLE} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={COLD_STORAGE} folderType={RELATIVE} maxCard={12} iconType={SVG}/>
        <FolderCard icon={CRYPTOGRAPHY} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={OS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={SMS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={VPS} folderType={RELATIVE} maxCard={12}/>
        <FolderCard icon={GITHUB} folderType={ABSOLUTE} maxCard={6}/>
        <FolderCard icon={WALLET} folderType={ABSOLUTE} iconType={SVG} maxCard={6}/>
        <FolderCard icon={ANALYSIS} folderType={ABSOLUTE} maxCard={6}/>
*/
