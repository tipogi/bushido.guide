import classNames from "classnames";
import { useContext } from "react";
import { IoFilterSharp } from "react-icons/io5";
import BarsLoader from "~/components/templates/generic/BarsLoader";
import FilterContext from "../../context/FilterContext";
import useFilterCurrency from "../../hooks/useFilterCurrency";

interface IFilterDisplayProps {
  toggleFilter(): void;
  activeFilter: boolean;
  btcPrice: string | undefined
}

export default function FilterDisplay({ toggleFilter, btcPrice, activeFilter }: IFilterDisplayProps) {

  const { direction, exchanges, premium, currency } = useContext(FilterContext);
  const filterIconClass = classNames({ active: activeFilter });
  const symbol = useFilterCurrency();

  const renderBtcPrice = () => {
    if (btcPrice) {
      const price = btcPrice == '0'
      ? '-' 
      : `${symbol}${btcPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`
      return price
    }
    return <BarsLoader/>
  }

  return (
    <div id="filter-display">
      <div id="filter-action" className={filterIconClass}>
        <IoFilterSharp onClick={toggleFilter}/>
      </div>
      <div id='description'>
        <h1>You have filtered 
          <span className='highlight'>{` ${currency.toUpperCase()} ${direction}`}</span> offers from 
          <span className='highlight'>{ ` ${exchanges.join(', ')}` }</span> with maximun premium price from market average of 
          <span className='highlight'>{` ${premium}%`}</span>
        </h1>
      </div>
      <div id="price">
        <span id="keyword">Bitcoin Price</span>
        <span id="number">{ renderBtcPrice() }</span>
      </div>
    </div>
  )
}