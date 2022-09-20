import { useLocation, useNavigate } from 'react-router-dom';

import { CardType, EXPLORER_GENERIC_ROUTE } from '~/constants';
import Breadcrumbs from './components/Breadcrumbs';
import DomainList from './components/DomainList';
import RouteStateError from './components/errors/RouterStateError';
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
  const navigate = useNavigate();
  console.log(state)
  
  /*if (state === null && key === 'default') {
    console.log('Explorer');
    console.log('state', state)
    console.log('key', key)
    return (
      <div className='main-container block-wo-height'>
        <RouteStateError/>
      </div>
    )
  }*/

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
