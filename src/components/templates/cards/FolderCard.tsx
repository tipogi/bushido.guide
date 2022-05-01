import React from 'react';
import { SVG } from '../../../constants';
import { getRandomInt } from '../../../services';
import CustomIcon from '../icons/CustomIcon';
import CustomSVG from '../icons/CustomSvg';
import './styles/folder-card.style.scss';

const MIN_NUMBER = 1;

interface FolderCardProps {
  icon: string;
  maxCard: number;
  folderType: string;
  iconType?: string;
}

const FolderCard: React.FC<FolderCardProps> = ({ icon, maxCard, folderType, iconType }: FolderCardProps) => {

  const imageNumber = getRandomInt(MIN_NUMBER, maxCard);
  return (
    <div className={`folder-card ${folderType}-number-${imageNumber} shadow`}>
      { iconType === SVG ?
        <CustomSVG name={icon} /> :
        <CustomIcon name={icon} />
      }
    </div>
  )
}

export default FolderCard;