import '../../styles/filter/operation.style.scss'
import { useContext } from 'react'
import FilterContext from '../../context/FilterContext'

interface FConfiguratorProps {
  reload: any
}

export default function FilterConfigurator({ reload }: FConfiguratorProps) {
  
  const { direction, exchanges, changePaymentDirection, toggleExchange } = useContext(FilterContext);

  const renderExchanges = () => {
    console.log(exchanges);
  }

  return (
    <div id="filter-configurator">
      <div id="filter">
        <div className="offer-direction" onClick={changePaymentDirection}>
          <div className="direction selected">Buy</div>
          <div className="direction">Sell</div>
        </div>
        <div className="offer-exchange">
          <div className='exchange'>
            <input type="checkbox" id="hodlhodl" className="exchange-input" onClick={() => toggleExchange('hodlhodl')}/>
            <label htmlFor="hodlhodl">HodlHodl</label>
          </div>
          <div className='exchange'>
            <input type="checkbox" id="bisq" className="exchange-input" onClick={() => toggleExchange('bisq')}/>
            <label htmlFor="bisq">Bisq</label>
          </div>
          <div className='exchange selected'>
            <input type="checkbox" id="robosats" className="exchange-input" onClick={() => toggleExchange('robosats')}/>
            <label htmlFor="robosats">RoboSats</label>
          </div>
        </div>
        <div className="offer-currency">
          <select>
            <option value="1">Currency</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>
        </div>
        <div className="offer-premium">
          <select>
            <option value="1">Premium</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="apply-filter-block">
          <button onClick={reload}>Reload</button>
        </div>
      </div>
    </div>
  )
}