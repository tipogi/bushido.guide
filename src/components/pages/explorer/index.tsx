import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { CardType } from '~/constants';
import Breadcrumbs from './components/Breadcrumbs';
import DomainList from './components/DomainList';
import TopicBoard from './components/TopicBoard';

import './styles/explorer.scss';

interface ILocation {
  state: IState
  key: any
}

interface IState {
  cardType: CardType
}

const Explorer: React.FC = () => {
  const { state, key } = useLocation() as ILocation;

  useEffect(() => {
    document.title = 'bushido.guide • explorer'
  })

  return (
    <div className='main-container block-wo-height'>
      <Breadcrumbs/>
        {
          state && state.cardType === CardType.LEAF 
            ? <DomainList/>
            : <TopicBoard/>
        }
    </div>
  )
}

export default Explorer;
