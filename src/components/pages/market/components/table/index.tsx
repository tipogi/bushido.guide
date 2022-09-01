import { find } from "lodash"
import { useContext, useMemo } from "react"
import ErrorNotification from "~/components/templates/generic/ErrorNotification"
import { IOffer } from "~/hooks/graphql/interfaces"
import FilterContext from "../../context/FilterContext"
import MarketHeader from "./MarketHeader"
import OfferRow from "./OfferRow"

interface IOffersTableProps {
  exchangeOffers: IOffer[]
}

export default function OffersTable({ exchangeOffers }: IOffersTableProps) {

  const { exchanges } = useContext(FilterContext);
  
  const filteredOffers = useMemo(() => {
    return exchangeOffers.filter((offer: IOffer) => {
      return find(exchanges, (filteredExchange) => offer.exchange.toLowerCase() === filteredExchange)
    })
  }, [exchanges.length]);

  const renderOfferTable = () => {
    return (
      <>
        <MarketHeader/>
        <ul>
          { filteredOffers.map((offer: IOffer, index) => <OfferRow offer={offer} key={`offer_${index}`}/>) }
        </ul>
      </>
    )
  }

  return (
    <div id='offer-lists'>
      { filteredOffers.length !== 0 && renderOfferTable() }
      { filteredOffers.length === 0 && <ErrorNotification/>}
    </div>
  )
}