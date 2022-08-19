import { useContext, useReducer, useState } from "react";
import FilterConfigurator from "./FilterConfigurator";
import { IoFilterSharp } from "react-icons/io5";

import '../../styles/filter.style.scss';
import FilterContext, { FilterContextProvider } from "../../context/FilterContext";
import FilterDisplay from "./FilterDisplay";

interface FilterProps {
  price: number;
  reload: any
}



export default function Filter({ price, reload }: FilterProps) {

  const [ filterOn, setFilter ] = useState(true);

  return (
    <FilterContextProvider>
      <div id='offer-filter'>
        <FilterDisplay/>
        { filterOn && <FilterConfigurator reload={reload}/> }
      </div>
    </FilterContextProvider>
  )
} 