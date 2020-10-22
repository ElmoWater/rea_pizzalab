import React, { useState, ChangeEvent, FormEvent } from "react";
import {doughNames,doughPrices} from "../../config/prices";

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

interface InputDoughtProps {
  pizza: Pizza,
  changeDough: ChangeDough
}

export const InputDough: React.FC<InputDoughtProps> = ({ pizza,changeDough }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //setIncrediences(e.target.value);
    changeDough(e.target.value);
  };

  return (
    <div>
    <form>
      <ToggleButtonGroup type='radio' name='dough' defaultValue={'1'}>
        <ToggleButton value={'1'} onChange={handleChange} >{doughNames[1]}</ToggleButton>
        <ToggleButton value={'2'} onChange={handleChange} >{doughNames[2]}</ToggleButton>
        <ToggleButton value={'3'} onChange={handleChange} >{doughNames[3]}</ToggleButton>
      </ToggleButtonGroup>
  

    </form>
  </div>
  );
};
/*
      <input type="radio" value="1" name="dough" checked={pizza.dough === 1} onChange={handleChange} /> {doughNames[1]}
      <input type="radio" value="2" name="dough" checked={pizza.dough === 2} onChange={handleChange} /> {doughNames[2]}
      <input type="radio" value="3" name="dough" checked={pizza.dough === 3} onChange={handleChange} /> {doughNames[3]}
*/
