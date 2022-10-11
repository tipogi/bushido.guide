import Landing from '~/components/pages/home/Landing';
import Description from '~/components/pages/home/Description';

import './styles/home.scss';
import './styles/home.responsive.scss';
import Modules from '~/components/pages/home/Modules';

const Home: React.FC = () => {
  return (
    <div id="home-container">
      <Landing/>
      <Description/>
      <Modules/>
    </div>
  )
}

export default Home;