import React from "react";


interface IncrediencesListProps {
  order:Order
}

const ListPizzas: React.FC<IncrediencesListProps> = ({order}) => {
  return (
    <ul>
    {order.foods.map((pizza, index) => (
        <li key="{index}">Pizza {pizza.price}€</li>
    ))}
  </ul>
  );
};
export default ListPizzas;