import { FaGithub, FaEnvelopeOpenText } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import { RiHeartPulseFill } from 'react-icons/ri';
import useHealthCheck from '~/hooks/api/useHeathCheck';
import { ImSpinner } from "react-icons/im";
import { IoRocketSharp } from 'react-icons/io5';

import './footer.style.scss';
import { HEALTH_STATUS } from '~/constants';
import { BsCloudSlashFill } from 'react-icons/bs';

const quote_james = 'The most dangerous creation of any society is the man who has nothing left to lose - James Baldwin'

const Footer: React.FC = () => {

  const { loading, healthStatus, checkHealthStatus } = useHealthCheck();

  const renderHealthCheckIcon = () => {
    if (loading) {
      return <span id='loading-icon'><ImSpinner/></span>
    }
    else if (healthStatus === HEALTH_STATUS.HEALTHY) {
      return <span id='rocket-icon'><IoRocketSharp/></span>
    } 
    else if (healthStatus === HEALTH_STATUS.DOWN) {
      return <span id='not-signal-icon'><BsCloudSlashFill/></span>
    }
    return (
      <span className="status-icon" onClick={checkHealthStatus}><RiHeartPulseFill/></span>
    )
  }
  return (
    <div id="bushido-footer">
        <div id="quote">"We are what we repeatedly do. Excellence, therefore, is not an act but a habit" - Aristotle</div>
        <div id="contact">
          { renderHealthCheckIcon() }
          <a id="mail-icon" href="mailto:bushido.guide@pm.me" target="_blank"><HiMail/></a>
          <a id="github-icon" href="https://github.com/tipogi" target="_blank"><FaGithub/></a>
        </div>
    </div>
  )
}

export default Footer;