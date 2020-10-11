import React from "react";
import {drinks} from "../../config/prices";

import {formatPrice} from "../../Controllers/PriceController";

interface IncrediencesListProps {
  order:Order
}

const ListPizzas: React.FC<IncrediencesListProps> = ({order}) => {
  return (
    <div>
      <ul>
      {order.foods.map((pizza, index) => (
          <li key={index}>Pizza {formatPrice(pizza.price)}</li>
      ))}
      </ul>
      <ul>
        {order.drinks.map((drink, index) => (
          <li key={index}>{drinks[drink.type].name} {formatPrice(drink.price)}</li>
        ))}
      </ul>
        <p>Total: {formatPrice(order.total)}</p>
    </div>
  );
};
export default ListPizzas;