import Exchange from "./components/table/Exchange";
import Maker from "./components/table/Maker";
import PaymentType from "./components/table/PaymentType";
import Filter from "./components/filter";
import { IOffer } from "~/hooks/graphql/interfaces";
import useMarketQuery from "~/hooks/graphql/useMarketQuery";
import { FilterContextProvider } from "./context/FilterContext";

import './styles/market.style.scss'

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
    <FilterContextProvider>
      <div className="main-container">
        <Filter price={22522} reload={updateTable} />
        <div id='offer-lists'>
          <ul>
            { marketOffers.data && renderOffers() }
          </ul>
        </div>
      </div>
    </FilterContextProvider>
  )
}