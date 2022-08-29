import Filter from "./components/filter";
import useMarketQuery from "~/hooks/graphql/useMarketQuery";
import { FilterContextProvider } from "./context/FilterContext";
import CircleLoader, { LoaderTypes } from "~/components/templates/generic/CircleLoader";
import OffersTable from "./components/table";

import './styles/market/market.style.scss'

export default function Market() {

  const { loading, error, data, price, setCall } = useMarketQuery();
  
  const updateTable = () => {
    setCall((prevState) => !prevState)
  }

  return (
    <FilterContextProvider>
      <div className="main-container">
        <Filter price={price} reload={updateTable} />
        { loading && <CircleLoader type={LoaderTypes.MARKET}/> }
        { error && <div style={{ marginTop: '100px', color: 'white'}}>It was an error while we were fetching the offers</div>}
        { data && <OffersTable exchangeOffers={data.showMarketOffers.offers} /> }
      </div>
    </FilterContextProvider>
  )
}