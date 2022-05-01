import React from 'react';
import { getRandomInt } from '../../../services';
import CustomSVG from '../icons/CustomSvg';
import './styles/main-card.style.scss';

const MIN_NUMBER = 1;
const MAX_NUMBER = 6;

interface MainCardProps {
  icon: string;
}

const MainCard: React.FC<MainCardProps> = ({ icon }: MainCardProps) => {

  const imageNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  return (
    <div className={`main-card number-${imageNumber} shadow`}>
      <CustomSVG name={icon}/>
    </div>
  )
}

export default MainCard;