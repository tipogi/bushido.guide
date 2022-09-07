import { FaGithub, FaEnvelopeOpenText } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import './footer.style.scss';

const Footer: React.FC = () => {
  return (
    <div id="bushido-footer">
        <FaGithub/>
        <HiMail/>
    </div>
  )
}

export default Footer;