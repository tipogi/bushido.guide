import { FaGithub, FaEnvelopeOpenText } from 'react-icons/fa';
import { HiMail } from "react-icons/hi";
import './footer.style.scss';

const quote_james = 'The most dangerous creation of any society is the man who has nothing left to lose - James Baldwin'

const Footer: React.FC = () => {
  return (
    <div id="bushido-footer">
        <div id="quote">"We are what we repeatedly do. Excellence, therefore, is not an act but a habit" - Aristotle</div>
        <div id="contact">
          <a href="mailto:bushido.guide@pm.me" target="_blank"><HiMail/></a>
          <a href="https://github.com/tipogi" target="_blank"><FaGithub/></a>
        </div>
    </div>
  )
}

export default Footer;