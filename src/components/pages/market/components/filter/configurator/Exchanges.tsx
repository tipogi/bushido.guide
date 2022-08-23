import classNames from "classnames";
import { find } from "lodash";
import { useContext } from "react";
import FilterContext from "../../../context/FilterContext";

const EXCHANGES = ['HodlHodl', 'Bisq', 'Robosats'];

export default function Exchanges() {

  const { exchanges, toggleExchange } = useContext(FilterContext);

  return (
    <div className="offer-exchange">
      {  EXCHANGES.map((exchange:string) => {
        const exchangeLowerCase = exchange.toLowerCase();
        const exchangeClassName = classNames('exchange', { selected: find(exchanges, (exchange) => exchange === exchangeLowerCase)})
        return (
          <div key={`exch-${exchangeLowerCase}`} className={ exchangeClassName }>
            <input 
              type="checkbox" 
              id={exchangeLowerCase} 
              className="exchange-input" 
              onClick={() => toggleExchange(exchangeLowerCase)}
            />
            <label 
              htmlFor={exchangeLowerCase}
            >{ exchange }</label>
          </div>
        )
      })}
    </div>
  )
}