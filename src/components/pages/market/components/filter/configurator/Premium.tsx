import { times } from "lodash";
import { useContext } from "react";
import FilterContext from "../../../context/FilterContext";

const premiumRanges = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 19, 24];

export default function Premium() {

  const { premium, changePremium } = useContext(FilterContext);

  return (
    <div className="offer-premium">
      <label>Premium</label>
      <select onChange={(e) => changePremium(parseInt(e.target.value))} defaultValue={premium}>
        { premiumRanges.map(percentage => {
          const incrementInOne = ++percentage;
          return <option key={`premium-${incrementInOne}`} value={ incrementInOne }>{ incrementInOne }</option>
        })}
      </select>
    </div>
  )
}