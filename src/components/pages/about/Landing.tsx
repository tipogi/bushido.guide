import classNames from 'classnames';
import { times } from 'lodash';
import { useEffect, useState } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import Divider from './components/Divider';
import Quotes from './components/Quotes';

import './styles/landing.scss';

const Landing: React.FC = () => {

  useEffect(() => {
    document.title = 'bushido.guide • home'
  })

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

  const number = Math.floor(Math.random() * 5) + 1

  return (
    <div id="landing-view" className={`block cover-${number}`}>
        <Quotes dotNumber={dotNumber} />
        <div className='pagination-block'>
            { renderDots() }
        </div>
      <Divider/>
    </div>
  )
}

export default Landing;