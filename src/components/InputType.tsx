
import React, { useState, ChangeEvent, FormEvent } from "react";
import {typeNames, typePrices} from "../config/prices";

interface InputTypeProps {
  pizza: Pizza,
  changeType: ChangeType
}

export const InputType: React.FC<InputTypeProps> = ({ pizza,changeType }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeType(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="radio" value="0" name="type" checked={pizza.type === 0} onChange={handleChange} /> {typeNames[0]} 
        <input type="radio" value="1" name="type" checked={pizza.type === 1} onChange={handleChange} /> {typeNames[1]}
        <input type="radio" value="2" name="type" checked={pizza.type === 2} onChange={handleChange} /> {typeNames[2]} 
        <input type="radio" value="3" name="type" checked={pizza.type === 3} onChange={handleChange} /> {typeNames[3]}
        <input type="radio" value="4" name="type" checked={pizza.type === 4} onChange={handleChange} /> {typeNames[4]}
        <input type="radio" value="5" name="type" checked={pizza.type === 5} onChange={handleChange} /> {typeNames[5]}
        <input type="radio" value="6" name="type" checked={pizza.type === 6} onChange={handleChange} /> {typeNames[6]}
        <input type="radio" value="7" name="type" checked={pizza.type === 7} onChange={handleChange} /> {typeNames[7]}
        <input type="radio" value="8" name="type" checked={pizza.type === 8} onChange={handleChange} /> {typeNames[8]}
      </form>
    </div>
  );
};