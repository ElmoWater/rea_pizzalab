import React from "react";
import {drinks} from "../../config/prices";

import {formatPrice,calculateOrderTotal} from "../../Controllers/PriceController";

interface IncrediencesListProps {
  orderHistory:OrderHistory
}

const ListPizzas: React.FC<IncrediencesListProps> = ({orderHistory}) => {
  return (
    <div className="mt-5">
      <p>Order History</p>
      
      <table >
        {orderHistory.map((order, index) => (
          order.foods.map((pizza,pindex) =>
            <tr key={pindex} style={{border: "1px solid rgb(0, 0, 0)"}}>
            <th>Pizza</th>
            <th>{formatPrice(pizza.price)}</th>
            <th>19%</th>
          </tr>
          )
        ))}
        {orderHistory.map((order, index) => (
          order.drinks.map((drink,pindex) =>
            <tr key={pindex}>
            <th>Drink</th>
            <th>{formatPrice(drink.price)}</th>
            <th>19%</th>
          </tr>
          )
        ))}  
      </table>

      <p>
        Total: {formatPrice(calculateOrderTotal(orderHistory))}
      </p>
    </div>
  );
};
export default ListPizzas;