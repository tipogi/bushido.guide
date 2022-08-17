import { useLocation } from 'react-router-dom';

import { CardType } from '~/constants';
import DomainList from './components/DomainList';
import TopicBoard from './components/TopicBoard';

import './styles/explorer.scss';

interface ILocation {
  state: IState
}

interface IState {
  cardType: CardType
}

const Explorer: React.FC = () => {
  const { state } = useLocation() as ILocation;

  return (
    <div className='main-container block-wo-height'>
        {
          state && state.cardType === CardType.LEAF 
            ? <DomainList/>
            : <TopicBoard/>
        }
    </div>
  )
}

export default Explorer;
