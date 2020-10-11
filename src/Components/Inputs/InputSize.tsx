import React, { useState, ChangeEvent, FormEvent } from "react";
import {sizeNames, sizePrizes} from "../../config/prices";

interface InputSizetProps {
  pizza: Pizza,
  changeSize: ChangeSize
}

export const InputSize: React.FC<InputSizetProps> = ({ pizza,changeSize }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //setIncrediences(e.target.value);
    changeSize(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="radio" value="2" name="size" checked={pizza.size === 2} onChange={handleChange} /> {sizeNames[2]}
        <input type="radio" value="1" name="size" checked={pizza.size === 1} onChange={handleChange} /> {sizeNames[1]}
        <input type="radio" value="3" name="size" checked={pizza.size === 3} onChange={handleChange} /> {sizeNames[3]}
      </form>
    </div>
  );
};