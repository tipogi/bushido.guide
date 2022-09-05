import { useContext } from "react";
import FilterContext from "../../../context/FilterContext";

export default function Currency() {

  const { currency, changeCurrency } = useContext(FilterContext);

  return (
    <div className="offer-currency">
      <label>Currency</label>
      <select onChange={(e) => changeCurrency(e.target.value)} defaultValue={currency}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="aud">AUD</option>
        <option value="cad">CAD</option>
      </select>
    </div>
  )
}