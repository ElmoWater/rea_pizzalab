import React, { useState, ChangeEvent, FormEvent } from "react";
import {doughNames,doughPrices} from "../../config/prices";

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

interface InputDoughtProps {
  dough:string,
  pizza: Pizza,
  changeDough: ChangeDough
}

export const InputDough: React.FC<InputDoughtProps> = ({ dough,pizza,changeDough }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //setIncrediences(e.target.value);
    changeDough(e.target.value); 
  };
 
  return (
    <div>
    <form>
      <ToggleButtonGroup type='radio' name='dough' defaultValue={'1'} value={dough}>
        <ToggleButton value={'1'} onChange={handleChange} >{doughNames[1]}</ToggleButton>
        <ToggleButton value={'2'} onChange={handleChange} >{doughNames[2]}</ToggleButton>
        <ToggleButton value={'3'} onChange={handleChange} >{doughNames[3]}</ToggleButton>
      </ToggleButtonGroup>
    </form>
  </div>
  );
};