import { useContext, useReducer, useState } from "react";
import FilterConfigurator from "./FilterConfigurator";
import { IoFilterSharp } from "react-icons/io5";
import FilterDisplay from "./FilterDisplay";

import '../../styles/filter.style.scss';

interface FilterProps {
  price: number;
  reload: any
}



export default function Filter({ price, reload }: FilterProps) {

  const [ filterOn, setFilter ] = useState(true);

  return (
    <div id='offer-filter'>
      <FilterDisplay/>
      { filterOn && <FilterConfigurator reload={reload}/> }
    </div>
  )
} 