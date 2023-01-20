import classNames from "classnames";
import { useContext } from "react";
import { BsSortDown, BsSortDownAlt } from "react-icons/bs";
import { RiMenu4Line } from "react-icons/ri";
import FilterContext from "../../context/FilterContext";
import { IOrderByObj } from "../../hooks/useFilterReducer";

interface IMarketHeader {
  sort: IOrderByObj
}

export enum TableHeader {
  P2P = 'P2P',
  State = 'State',
  Price = 'Price',
  Premium = 'Premium',
  Minimun = 'Minimun',
  Maximun = 'Maximun',
  PaymentType = 'Payment Type'
}

export enum OrderTableFrom {
  Min = 'min',
  Max = 'max'
  
}

const HEADER = [
  TableHeader.P2P, 
  TableHeader.State, 
  TableHeader.Premium, 
  TableHeader.Minimun, 
  TableHeader.Maximun, 
  TableHeader.PaymentType
];

export default function MarketHeader({ sort }: IMarketHeader) {

  const { sortTable } = useContext(FilterContext);

  function getDisplayText(value: TableHeader) {
    switch (value) {
      case TableHeader.Premium:
      case TableHeader.Minimun:
      case TableHeader.Maximun:
        let icon = <RiMenu4Line/>
        if (value === sort.colum) {
          if (sort.from === OrderTableFrom.Max) {
            icon = <BsSortDown/>
          } else {
            icon = <BsSortDownAlt/>
          }
        }
        return <>{value}{icon}</>
      default:
        return value;
    }
  }

  function getSpanProps(value: TableHeader) {
    let spanProps = { key: `header-${value}`};
    switch (value) {
      case TableHeader.Price:
      case TableHeader.Maximun:
      case TableHeader.Minimun:
      case TableHeader.Premium:
        const className = classNames("action", { selected: value === sort.colum })
        const event = { 
          onClick: () => sortTable(value),
          className
        };
        return { ...spanProps, ...event }
      default:
        return spanProps;
    }
  }


  return (
    <div id="market-header">
      { HEADER.map((value: TableHeader) => {
          let display_text = getDisplayText(value);
          let spanProps = getSpanProps(value);
          return <span { ...spanProps }>{ display_text }</span>
        })   
      }
    </div>
  )
}