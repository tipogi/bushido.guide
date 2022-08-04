import { useLocation } from 'react-router-dom';

import { CardType } from '~/constants';
import DomainList from '~/components/layouts/explorer/DomainList';
import TopicBoard from '~/components/layouts/explorer/TopicBoard';

import '../styles/explorer.scss';

interface ILocation {
  state: IState
}

interface IState {
  cardType: CardType
}

const Explorer: React.FC = () => {
  const { state } = useLocation() as ILocation;

  return (
    <div id="explorer-container" className='block-wo-height'>
      <div id="list-container">
        {
          state && state.cardType === CardType.LEAF 
            ? <DomainList/>
            : <TopicBoard/>
        }
      </div>
    </div>
  )
}

export default Explorer;
