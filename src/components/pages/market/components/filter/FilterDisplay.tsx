import { useContext } from "react";
import { IoFilterSharp } from "react-icons/io5";
import FilterContext from "../../context/FilterContext";

export default function FilterDisplay() {

  const { direction, exchanges, premium } = useContext(FilterContext);
  
  const renderExchanges = () => {

  }


  return (
    <div id="filter-display">
      <div id="filter-action" /*onClick={() => setFilter((prevState) => !prevState)}*/><IoFilterSharp/></div>
      <div id='description'>
        <h1>You have filtered 
          <span className='highlight'>{` USD ${direction}`}</span> offers from 
          <span className='highlight'>{ ` ${exchanges.join(', ')}` }</span> with maximun premium price from market average of 
          <span className='highlight'>{` ${premium}%`}</span>
        </h1>
      </div>
      <div id="price">
        <span id="keyword">Bitcoin Price</span>
        <span id="number">$</span>
      </div>
    </div>
  )
}