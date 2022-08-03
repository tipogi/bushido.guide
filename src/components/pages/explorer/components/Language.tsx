import { ENG, ESP } from "@/constants";
import Image from "@/components/templates/generic/Image";

interface LanguageProps {
  lang: string
}

const imgStyle = {
  fontSize: '1em',
  filter: 'grayscale(1)'
}

const getLanguageUrl = (lang: string) => {
  let src;
  switch (lang) {
    case ENG:
      src = '/public/img/others/eng.png';
      break;
    case ESP:
      src = '/public/img/others/esp.png';
      break;
    default:
      src = '';
      break;
  }
  return src;
}


const Language: React.FC<LanguageProps> = ({ lang }) => {

  const langURL = getLanguageUrl(lang);
  return (
    <div className="language-container">
      <img src={langURL} />
    </div>
  )
}

export default Language;

