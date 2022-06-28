import { useState } from 'react';
import { domain } from '../../../data/domain';
import { FolderType } from '../../../constants';
import DomainCard from '../../templates/cards/DomainCard';

import '../styles/explorer.scss';

interface Domain {
  name: string
  description: string
  url: string
  icon: string
  lang: string
  hash: string
}

const Explorer: React.FC = () => {

  const [domains] = useState<Domain[]>(domain);

  const renderCards = () => {
    return (
      domains.map(({ icon, name, description, lang, url, hash}: Domain) => {
        return (
          <DomainCard
            icon={icon}
            name={name}
            description={description}
            lang={lang}
            url={url}
            key={hash}
          />
        )
      })
    )
  }

  return (
    <div id="explorer-container" className='block-wo-height'>
      <div id="list-container">
        {
          renderCards()
        }
      </div>
    </div>
  )
}

export default Explorer;
