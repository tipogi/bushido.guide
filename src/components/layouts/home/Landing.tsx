import { Link } from 'react-router-dom';
import { EXPLORER_ROUTE } from '../../../constants';
import './styles/landing.scss';

const Landing: React.FC = () => {
  return (
    <div id="landing-view" className="block">
      {/*<Link to={EXPLORER_ROUTE}>
        <button>Explorer</button>
  </Link>*/}
      <div className="custom-shape-divider-bottom-1649918002">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default Landing;