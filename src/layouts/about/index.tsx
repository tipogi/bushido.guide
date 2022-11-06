import Landing from '~/components/pages/about/Landing';
import Description from '~/components/pages/about/Description';

import './styles/home.scss';
import './styles/home.responsive.scss';
import Modules from '~/components/pages/about/Modules';

const About: React.FC = () => {
  return (
    <div id="home-container">
      <Landing/>
      <Description/>
      <Modules/>
    </div>
  )
}

export default About;