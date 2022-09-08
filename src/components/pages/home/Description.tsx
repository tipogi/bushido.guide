import React from 'react';
import Virtutes from './components/Virtutes';

import './styles/description.scss';

const Description: React.FC = () => {
  
  return (
    <div id="description-view" className="block pattern-dots-md">
      <h1 className='description-text'>Bushido was the code of conduct for Japan's warrior classes from perhaps as early as the eighth century through modern times. The word "<span className='highlight'>bushido</span>" comes from the Japanese roots "bushi" meaning "warrior," and "do" meaning "path" or "way." It translates literally to "<span className='highlight'>way of the warrior</span>."</h1>
      <div className='circle-block'>
        <div className='legend-block'>
          <h1>Bushido was an ethical system, rather than a religious belief system. The list of the virtues encoded in bushido are seven </h1>
          <h1>The ideal samurai warrior was supposed to be immune from the fear of death. Only the fear of dishonor and loyalty to his daimyo motivated the true samurai</h1>
          <h1>Bushido was considered a method of both corporeal and spiritual self-improvement. The code also regulated the relationship between warriors and the rest of the society, which – according to the samurai philosophy – should be based on strictly defined relations of power and serfdom. Bushido was passed orally from generation to generation, never written down.</h1>
        </div>
        <Virtutes/>
      </div>
    </div>
  )
}

export default Description;


