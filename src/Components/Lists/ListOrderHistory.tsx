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
      <ul>
        {orderHistory.map((order, index) => (
          <li key={index}>Order #{index+1}: {formatPrice(order.total)}</li>
        ))}
      </ul>
      <p>
        Total: {formatPrice(calculateOrderTotal(orderHistory))}
      </p>
    </div>
  );
};
export default ListPizzas;