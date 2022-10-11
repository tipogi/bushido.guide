import { IOffer } from "~/hooks/graphql/interfaces";
import Exchange from "./Exchange";
import Maker from "./Maker";
import PaymentType from "./PaymentType";

interface IOfferRow {
  offer: IOffer,
  symbol: string
}

const TELEGRAM_URL = 'https://t.me/p2plightning'

export default function OfferRow({ offer, symbol }: IOfferRow) {
  const { exchange, maker_status, dif, min_amount, max_amount, method, extra } = offer;

  const openTelegramOffer = () => {
    if (extra.length !== 0) {
      window.open(`${TELEGRAM_URL}/${extra}`)
    } 
  }

  return (
    <li className={`${exchange.toLowerCase()}`} onClick={ () => openTelegramOffer() }>
      <Exchange name={exchange}/>
      <Maker status={maker_status}/>
      <span>{dif}</span>
      <span>{`${symbol}${min_amount}`}</span>
      <span>{`${symbol}${max_amount}`}</span>
      <PaymentType method={method} extra={extra}/>
    </li>
  )
}