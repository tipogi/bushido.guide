import { find } from "lodash"
import { useContext, useMemo } from "react"
import { IOffer } from "~/hooks/graphql/interfaces"
import FilterContext from "../../context/FilterContext"
import { sortMarketList } from "../../helper/sort.helper"
import useFilterCurrency from "../../hooks/useFilterCurrency"
import MarketHeader from "./MarketHeader"
import NoOffersNotification from "./NoOffersNotification"
import OfferRow, { RowType } from "./OfferRow"

interface IOffersTableProps {
  exchangeOffers: IOffer[]
}

export default function OffersTable({ exchangeOffers }: IOffersTableProps) {

  const { exchanges, sort } = useContext(FilterContext);
  
  const filteredOffers = useMemo(() => {
    console.log(sort)
    const filteredRows = exchangeOffers.filter((offer: IOffer) => {
      return find(exchanges, (filteredExchange) => offer.exchange.toLowerCase() === filteredExchange)
    })
    return sortMarketList(filteredRows, sort.colum, sort.from);
  }, [exchanges.length, exchangeOffers.length, sort.colum, sort.from]);

  const symbol = useFilterCurrency();

  const renderOfferTable = () => {
    return (
      <>
        <MarketHeader sort={sort}/>
        <ul>
          { filteredOffers.map((offer: IOffer, index) => 
            <OfferRow 
              offer={offer} 
              symbol={symbol}
              key={`offer_${index}`}
              rowType={index % 2 ? RowType.Dark : RowType.Light}
            />) 
          }
        </ul>
      </>
    )
  }

  return (
    <div id='offer-lists'>
      { filteredOffers.length !== 0 && renderOfferTable() }
      { filteredOffers.length === 0 && <NoOffersNotification/>}
    </div>
  )
}