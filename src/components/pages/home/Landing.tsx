import classNames from 'classnames';
import { times } from 'lodash';
import { useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import Divider from './components/Divider';
import Quotes from './components/Quotes';

import './styles/landing.scss';

const Landing: React.FC = () => {

  const [dotNumber, selectQuote ] = useState(0)

  const renderDots = () => {
    return (
      times(4).map((value, index) => {
        const dotProps = {
          key: `dot-${index}`,
          className: classNames({ 'selected': index === dotNumber }),
          onClick: () => selectQuote(index)
        }
        return <GoPrimitiveDot { ...dotProps }/>
      })
    )
  }

  return (
    <div id="landing-view" className="block">
        <Quotes dotNumber={dotNumber} />
        <div className='pagination-block'>
            { renderDots() }
        </div>
      <Divider/>
    </div>
  )
}

export default Landing;