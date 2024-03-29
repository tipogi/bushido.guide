import { BR, DE, DEU, ENG, ESP, FR } from "~/constants";

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
      src = '/img/lang/eng.png';
      break;
    case ESP:
      src = '/img/lang/esp.png';
      break;
    case DEU:
      src = '/img/lang/deu.png';
      break;
    case BR:
      src = '/img/lang/br.png';
      break;
    case FR:
      src = '/img/lang/fr.png';
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

