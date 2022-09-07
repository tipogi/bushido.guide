import React from 'react';
import Virtutes from './components/Virtutes';

import './styles/description.scss';

const Description: React.FC = () => {
  
  return (
    <div id="description-view" className="block pattern-dots-md">
      <h1 className='description-text'>Bushido was the code of conduct for Japan's warrior classes from perhaps as early as the eighth century through modern times. The word "<span className='highlight'>bushido</span>" comes from the Japanese roots "bushi" meaning "warrior," and "do" meaning "path" or "way." It translates literally to "way of the warrior."</h1>
      <div className='circle-block'>
        <h1>Bushido was an ethical system, rather than a religious belief system. The list of the virtues encoded in bushido are seven </h1>
        <Virtutes/>
        <h1>The ideal samurai warrior was supposed to be immune from the fear of death. Only the fear of dishonor and loyalty to his daimyo motivated the true samurai</h1>
      </div>
    </div>
  )
}

export default Description;