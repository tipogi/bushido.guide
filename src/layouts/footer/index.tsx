import { FaGithub, FaEnvelopeOpenText } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import './footer.style.scss';

const Footer: React.FC = () => {
  return (
    <div id="bushido-footer">
        <div id="quote">"The most dangerous creation of any society is the man who has nothing left to lose" - James Baldwin</div>
        <div id="contact">
          <FaGithub/>
          <HiMail/>
        </div>
    </div>
  )
}

export default Footer;