import Landing from '~/components/layouts/home/Landing';
import Virtutes from '~/components/layouts/home/Virtutes';

import './styles/home.scss';
import './styles/home.responsive.scss';

const Home: React.FC = () => {
  return (
    <div id="home-container">
      <Landing/>
      <Virtutes/>
    </div>
  )
}

export default Home;