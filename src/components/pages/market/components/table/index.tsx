import { find } from "lodash"
import { useContext, useMemo } from "react"
import { IOffer } from "~/hooks/graphql/interfaces"
import FilterContext from "../../context/FilterContext"
import Exchange from "./Exchange"
import Maker from "./Maker"
import OfferRow from "./OfferRow"
import PaymentType from "./PaymentType"

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

  const renderOfferRows = () => {
    return filteredOffers.map((offer: IOffer, index) => <OfferRow offer={offer} key={`offer_${index}`}/>);
  }

  return (
    <div id='offer-lists'>
      { filteredOffers.length !== 0 && <ul> { renderOfferRows() }</ul> }
      { filteredOffers.length === 0 && <div style={{ marginTop: '100px', color: 'white'}}>Error while fetching filtered exchanges or does not exist any offer</div>}
    </div>
  )
}