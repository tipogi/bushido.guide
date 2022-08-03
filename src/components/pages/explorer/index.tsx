import { useEffect, useState } from 'react';
import { domain } from '../../../data/domain';
import { FolderType } from '../../../constants';
import DomainCard from '../../templates/cards/DomainCard';

import '../styles/explorer.scss';
import { useLazyQuery } from '@apollo/client';
import { SHOW_TOPICS } from '../../../graphql/queries';
import { Branch } from './Explorer copy';
import TopicCard from '../../templates/cards/TopicCard';
import { useLocation, useNavigate } from 'react-router-dom';
import useTopicQuery from '../../../hooks/useTopicQuery';
import useExplorerNavigate from '../../../hooks/useExplorerNavigate';

interface Domain {
  name: string
  description: string
  url: string
  icon: string
  lang: string
  hash: string
}

const Explorer: React.FC = () => {

  const { topicArray } = useTopicQuery();
  let explorerNavigate = useExplorerNavigate(); 

  const renderCards = () => {
    if (topicArray.data) {
      return (
        topicArray.data.showTopics.map((card: any) => {
          return (
            <TopicCard 
              name={card.name}
              description={card.description}
              icon={ card.icon } 
              folderType={card.type} 
              key={card.hash}
              navigateEvent={(name: string) => {
                console.log('Event Name param:', name)
                console.log('Event card object:', card)
                explorerNavigate(name, card.type)
              }}
            />
          )
        })
      )
    } else {
      return <h1>Empty</h1>
    }
  }

  return (
    <div id="explorer-container" className='block-wo-height'>
      <div id="list-container">
        {
          renderCards()
        }
      </div>
    </div>
  )
}

export default Explorer;
