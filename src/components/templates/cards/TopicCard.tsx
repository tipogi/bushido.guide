import React from 'react';

import { FolderType, SVG } from '../../../constants';
import { getIconType, getRandomInt } from '../../../services';
import CustomIcon from '../icons/CustomIcon';
import CustomSVG from '../icons/CustomSvg';

import './styles/topic-card.style.scss';

interface FolderCardProps {
  name: string;
  description: string;
  icon: string;
  folderType: FolderType;
  iconType?: string;
  navigateEvent: any
}

const TopicCard: React.FC<FolderCardProps> = ({ name, description, icon, folderType, navigateEvent }: FolderCardProps) => {

  // We need to extract from the array the topic. Might do in the server
  const cardType = FolderType.ROOT;

  const imageNumber = getRandomInt(cardType);
  console.log(imageNumber)

  const renderIcon = () => {
    return getIconType(icon) === SVG ?
      <CustomSVG name={icon} /> :
      <CustomIcon name={icon}/>
  }
  console.log('TODO: Name has to be without format');
  const formatName = `${name[0].toUpperCase()}${name.substring(1)}`;
  return (
    <div className={`topic-card ${cardType.toLowerCase()}-number-${imageNumber} shadow`} onClick={() => navigateEvent(formatName)}>
      { renderIcon() }
      <div className='topic-name'><span>{formatName}</span></div>
      <div className='topic-description'><span>{description.substring(0, 70)}</span></div>
    </div>
  )
}

export default TopicCard;