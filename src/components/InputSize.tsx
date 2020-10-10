
import React, { useState, ChangeEvent, FormEvent } from "react";
import {sizeNames, sizePrizes} from "../config/prices";

interface InputSizetProps {
  pizza: Pizza;
}

export const InputSize: React.FC<InputSizetProps> = ({ pizza }) => {

  return (
    <p>Große: {sizeNames[pizza.size]}</p>
  );
};