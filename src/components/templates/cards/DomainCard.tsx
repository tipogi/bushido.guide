import { GiCyberEye } from 'react-icons/gi';
import Language from '~/components/pages/explorer/components/Language'
import useUpdateVisitMutation from '~/hooks/graphql/useUpdateVisitMutation';
import useExplorerNavigate from '~/hooks/router/useExplorerNavigate';
import Image from '../generic/Image'

interface DomainCardProps {
  name: string
  description: string
  icon: string
  lang: string
  url: string
  hash: string;
  visits: number
}

const DomainCard: React.FC<DomainCardProps> = ({ icon, name, description, lang, url, hash, visits }) => {

  const { pathArray } = useExplorerNavigate();
  const { domainVisits, updateVisits } = useUpdateVisitMutation({ visits });

  function openDomainTab(url: string) {
    const domainData = { path: pathArray, name, hash }
    updateVisits(domainData)
    window.open(url)
  }

  return (
    <div className="domain-card" onClick={() => openDomainTab(url)}>
      <Image iconUrl={icon} />
      <div className="text-container">
        <div className="domain-name">{name}</div>
        <div className="domain-description">{description}</div>
      </div>
      <div className="view-container">
        <GiCyberEye/><span>{ domainVisits }</span>
      </div>
      <Language lang={lang}/>
    </div>
  )

}

export default DomainCard;