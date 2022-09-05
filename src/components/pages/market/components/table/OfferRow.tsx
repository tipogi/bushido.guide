import { IOffer } from "~/hooks/graphql/interfaces";
import Exchange from "./Exchange";
import Maker from "./Maker";
import PaymentType from "./PaymentType";

interface IOfferRow {
  offer: IOffer,
  symbol: string
}

export default function OfferRow({ offer, symbol }: IOfferRow) {
  const { exchange, maker_status, dif, min_amount, max_amount, method } = offer;
  return (
    <li>
      <Exchange name={exchange}/>
      <Maker status={maker_status}/>
      <span>{dif}</span>
      <span>{`${symbol}${min_amount}`}</span>
      <span>{`${symbol}${max_amount}`}</span>
      <PaymentType method={method}/>
    </li>
  )
}