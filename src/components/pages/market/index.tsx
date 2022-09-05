import Filter from "./components/filter";
import useMarketQuery from "~/hooks/graphql/useMarketQuery";
import { FilterContextProvider } from "./context/FilterContext";
import CircleLoader, { LoaderTypes } from "~/components/templates/generic/CircleLoader";
import OffersTable from "./components/table";

import './styles/market/market.style.scss'
import ErrorNotification from "~/components/templates/generic/ErrorNotification";

export default function Market() {

  const { loading, error, data, price, setCall } = useMarketQuery();

  console.log(loading, error)
  
  const updateTable = () => {
    setCall((prevState) => !prevState)
  }

  return (
    <FilterContextProvider>
      <div className="main-container">
        <Filter price={price} reload={updateTable} />
        { loading && <CircleLoader type={LoaderTypes.MARKET}/> }
        { error && <ErrorNotification/>}
        { data && <OffersTable exchangeOffers={data.showMarketOffers.offers} /> }
      </div>
    </FilterContextProvider>
  )
}