import { IOffer } from "~/hooks/graphql/interfaces";
import { OrderTableFrom, TableHeader } from "../components/table/MarketHeader";

export const sortMarketList = (list: IOffer[], sort: TableHeader, colum: OrderTableFrom): IOffer[] => {
    switch (sort) {
        case TableHeader.Maximun:
            return list.sort((offerOne, offerTwo) => {
                if (colum == OrderTableFrom.Min) {
                    return parseInt(offerOne.max_amount) - parseInt(offerTwo.max_amount);
                }
                return parseInt(offerTwo.max_amount) - parseInt(offerOne.max_amount);
            });
        case TableHeader.Minimun:
            return list.sort((offerOne, offerTwo) => {
                if (colum == OrderTableFrom.Min) {
                    return parseInt(offerOne.min_amount) - parseInt(offerTwo.min_amount);
                }
                return parseInt(offerTwo.min_amount) - parseInt(offerOne.min_amount);
            });
        // That case would be for Premium and Price
        default:
            return list.sort((offerOne, offerTwo) => {
                if (colum == OrderTableFrom.Min) {
                    return offerOne.price - offerTwo.price;
                }
                return offerTwo.price - offerOne.price;
            });
    }
}