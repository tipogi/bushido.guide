import classNames from "classnames";
import { useContext } from "react";
import { OFFER_DIRECTION } from "~/constants";
import FilterContext from "../../../context/FilterContext";

export default function Direction () {

  const { direction, changePaymentDirection } = useContext(FilterContext);

  const buyClass = classNames('direction', { selected: OFFER_DIRECTION.BUY === direction })
  const sellClass = classNames('direction', { selected: OFFER_DIRECTION.SELL === direction })

  return (
    <div className="offer-direction">
      <div className="offer-switch" onClick={changePaymentDirection}>
        <div className={ buyClass }>Buy</div>
        <div className={ sellClass }>Sell</div>
      </div>
    </div>
  )
}