import Filter from "./components/filter";
import useMarketQuery from "~/hooks/graphql/useMarketQuery";
import { FilterContextProvider } from "./context/FilterContext";
import OffersTable from "./components/table";

import './styles/market.style.scss'

export default function Market() {

  const { marketOffers, setCall } = useMarketQuery();
  
  const updateTable = () => {
    setCall((prevState) => !prevState)
  }

  console.log(marketOffers)

  return (
    <FilterContextProvider>
      <div className="main-container">
        <Filter price={22522} reload={updateTable} />
        { (marketOffers.data === undefined || marketOffers.loading) && <div style={{ marginTop: '100px', color: 'white'}}>LOADING...</div>}
        { (marketOffers.error || marketOffers.data?.showMarketOffers.price === '0') && <div style={{ marginTop: '100px', color: 'white'}}>It was an error while we were fetching the offers</div>}
        { (marketOffers.data && marketOffers.data.showMarketOffers.price !== '0') && <OffersTable exchangeOffers={marketOffers.data.showMarketOffers.offers} /> }
      </div>
    </FilterContextProvider>
  )
}