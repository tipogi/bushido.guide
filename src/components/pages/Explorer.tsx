import MainCard from '../templates/cards/MainCard';
import { BITCOIN, PRIVACY } from '../templates/icons';
import './styles/explorer.scss';

const Explorer: React.FC = () => {
  return (
    <div id="explorer-container" className='block'>
      <div id="cards-container">
        <MainCard icon={BITCOIN}/>
        <MainCard icon={PRIVACY}/>
      </div>
    </div>
  )
}

export default Explorer;