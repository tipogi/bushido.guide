import { times } from "lodash";
import { useContext } from "react";
import FilterContext from "../../../context/FilterContext";

export default function Premium() {

  const { premium, changePremium } = useContext(FilterContext);

  return (
    <div className="offer-premium">
      <label>Premium</label>
      <select onChange={(e) => changePremium(parseInt(e.target.value))} defaultValue={premium}>
        { times(10).map(percentage => {
          const incrementInOne = ++percentage;
          return <option key={`premium-${incrementInOne}`} value={ incrementInOne }>{ incrementInOne }</option>
        })}
      </select>
    </div>
  )
}