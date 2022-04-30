import React from 'react';
import CustomSVG from '../icons/CustomSvg';
import './styles/main-card.style.scss';

const MIN_NUMBER = 1;
const MAX_NUMBER = 4;

interface MainCardProps {
  icon: string;
}

const MainCard: React.FC<MainCardProps> = ({ icon }: MainCardProps) => {
  const getRandomInt = () => {
    const min = Math.ceil(MIN_NUMBER);
    const max = Math.floor(MAX_NUMBER);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const imageNumber = getRandomInt();
  return (
    <div className={`main-card number-${imageNumber}`}>
      <CustomSVG name={icon}/>
    </div>
  )
}

export default MainCard;