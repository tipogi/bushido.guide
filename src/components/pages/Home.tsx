import Landing from "../layouts/home/Landing";
import Virtutes from "../layouts/home/Virtutes";

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