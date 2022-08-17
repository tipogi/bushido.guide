import useMarketQuery from "~/hooks/useMarketQuery";
import Exchange from "./components/Exchange";
import Maker from "./components/Maker";
import PaymentType from "./components/PaymentType";

import './styles/market.style.scss'

export default function Market() {

  const { marketOffers } = useMarketQuery();

  console.log(marketOffers)


  const renderOffers = () => {
    console.log(marketOffers.data.showMarketOffers.offers)
    return marketOffers.data.showMarketOffers.offers.map(({ exchange, dif, maker_status, min_btc, max_btc, min_amount, max_amount, method }, index) => {
      return (
        <li key={index}>
          <Exchange name={exchange}/>
          <Maker status={maker_status}/>
          <span>{dif}</span>
          <span>{`$${min_amount}`}</span>
          <span>{`$${max_amount}`}</span>
          <span>{min_btc}</span>
          <span>{max_btc}</span>
          <PaymentType method={method}/>
        </li>
      )
    })
  }

  return (
    <div className="main-container">
      <div id='offer-request'>
        <div id='description'>
          <h1>You have filtered <span className='highlight'>dolar BUY</span> offers from <span className='highlight'>robosats, hodlhodl, bisq</span> with max premium of <span className='highlight'>8%</span></h1>
        </div>
        <div id="price">
          <span id="keyword">Bitcoin Price</span>
          <span id="number">$22522</span>
        </div>
      </div>

      <div id='offer-filters'>

      </div>
      <div id='offer-lists'>
        <ul>
          { marketOffers.data && renderOffers() }
        </ul>
      </div>
    </div>
  )
}