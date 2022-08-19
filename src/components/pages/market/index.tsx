import useMarketQuery from "~/hooks/graphql/useMarketQuery";
import Exchange from "./components/table/Exchange";
import Maker from "./components/table/Maker";
import PaymentType from "./components/table/PaymentType";

import './styles/market.style.scss'
import { IOffer } from "~/hooks/graphql/interfaces";
import Filter from "./components/filter";

export default function Market() {

  const { marketOffers, setCall } = useMarketQuery();
  
  const updateTable = () => {
    setCall((prevState) => !prevState)
  }

  const renderOffers = () => {
    return marketOffers.data?.showMarketOffers.offers.map(({ exchange, dif, maker_status, min_amount, max_amount, method }: IOffer, index) => {
      return (
        <li key={index}>
          <Exchange name={exchange}/>
          <Maker status={maker_status}/>
          <span>{dif}</span>
          <span>{`$${min_amount}`}</span>
          <span>{`$${max_amount}`}</span>
          <PaymentType method={method}/>
        </li>
      )
    })
  }

  return (
    <div className="main-container">
      <Filter price={22522} reload={updateTable} />
      <div id='offer-lists'>
        <ul>
          { marketOffers.data && renderOffers() }
        </ul>
  </div>
    </div>
  )
}