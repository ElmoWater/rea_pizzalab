import React, { useState, ChangeEvent, FormEvent } from "react";
import {drinks} from "../../config/prices";

interface InputDrinksProps {
  addDrinkToOrder: AddDrinkToOrder;
}

export const InputDrinks: React.FC<InputDrinksProps> = ({addDrinkToOrder}) => {
  
  const handleClick = (i:number) => {
    addDrinkToOrder(i);
  };
  

  return (
    <div>
      {drinks.map((drink,index) => (
        <button key={index} onClick={() => handleClick(index)} value={index}>{drink.name}</button>
      ))}
    </div>
  );
};