import React from 'react';
import { motion } from 'framer-motion';

import { CardType, SVG } from '~/constants';
import { getIconType, getRandomInt } from '~/constants';
import CustomIcon from '../icons/CustomIcon';
import CustomSVG from '../icons/CustomSvg';

import './styles/topic-card.style.scss';

interface FolderCardProps {
  index: number;
  name: string;
  description: string;
  icon: string;
  cardType: CardType;
  iconType?: string;
  hash: string
  navigateEvent: any
}

const variants = {
  hidden: {
    opacity: 0,
    y: -(Math.random() * (50 - 0) + 0)
  },
  visible: ({ delay }) => ({
    opacity: 1,
    transition: {
      delay,
      duration: .35
    },
    y: 0
  })
}

const TopicCard: React.FC<FolderCardProps> = ({ index, name, description, icon, navigateEvent, hash }: FolderCardProps) => {

  // We need to extract from the array the topic. Might do in the server
  const cardType = CardType.ROOT;

  const imageNumber = getRandomInt(cardType);

  const renderIcon = () => {
    return getIconType(icon) === SVG ?
      <CustomSVG name={icon} /> :
      <CustomIcon name={icon}/>
  }
  console.log('TODO: Name has to be without format');
  const formatName = `${name[0].toUpperCase()}${name.substring(1)}`;
  return (
    <motion.div 
      className={`topic-card ${cardType.toLowerCase()}-number-${imageNumber} shadow`} 
      onClick={() => navigateEvent(formatName)}
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={variants}
      layoutId={`${name}_${hash}`}
      custom={{ delay: (index + 1) * 0.1 }}
    >
      <div className='topic-headline'>
        { renderIcon() }
        <div className='topic-name'><span>{formatName}</span></div>
      </div>
      <div className='topic-description'><span>{description.substring(0, 90)}</span></div>
    </motion.div>
  )
}

export default TopicCard;