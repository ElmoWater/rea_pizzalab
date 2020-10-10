
import React, { useState, ChangeEvent, FormEvent } from "react";
import {doughNames,doughPrices} from "../config/prices";

interface InputDoughtProps {
  pizza: Pizza;
}

export const InputDough: React.FC<InputDoughtProps> = ({ pizza }) => {

  return (
    <p>Dough: {doughNames[pizza.dough]}</p>
  );
};