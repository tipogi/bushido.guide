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