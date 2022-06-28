import { GiCyberEye } from "react-icons/gi";
import Language from "../../pages/explorer/components/Language"
import Image from "../generic/Image"

interface DomainCardProps {
  name: string
  description: string
  icon: string
  lang: string
  url: string
}

const DomainCard: React.FC<DomainCardProps> = ({ icon, name, description, lang, url }) => {

  return (
    <div className="domain-card">
      <Image iconUrl={icon} />
      <div className="text-container">
        <div className="domain-name">{name}</div>
        <div className="domain-description">{description}</div>
      </div>
      <div className="view-container">
        <GiCyberEye/><span>152</span>
      </div>
      <Language lang={lang}/>
    </div>
  )

}

export default DomainCard;