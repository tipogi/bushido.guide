import Landing from '~/components/pages/home/Landing';
import Description from '~/components/pages/home/Description';

import './styles/home.scss';
import './styles/home.responsive.scss';

const Home: React.FC = () => {
  return (
    <div id="home-container">
      <Landing/>
      <Description/>
    </div>
  )
}

export default Home;