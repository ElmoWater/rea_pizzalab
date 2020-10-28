import React, { useState, ChangeEvent, FormEvent } from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {typeNames, typePrices} from "../../config/prices";

interface InputTypeProps {
  type: string,
  pizza: Pizza,
  changeType: ChangeType
}

export const InputType: React.FC<InputTypeProps> = ({ type,pizza,changeType }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeType(e.target.value);
  };
 
  return (
    <div>
      <form>
        <ToggleButtonGroup type='radio' name='size' defaultValue={'0'} className="mt-1" value={type}>
          <ToggleButton value={'0'} onChange={handleChange} >{typeNames[0]}</ToggleButton>
          <ToggleButton value={'1'} onChange={handleChange} >{typeNames[1]}</ToggleButton>
          <ToggleButton value={'2'} onChange={handleChange} >{typeNames[2]}</ToggleButton>
          <ToggleButton value={'3'} onChange={handleChange} >{typeNames[3]}</ToggleButton>
          <ToggleButton value={'4'} onChange={handleChange} >{typeNames[4]}</ToggleButton>
          <ToggleButton value={'5'} onChange={handleChange} >{typeNames[5]}</ToggleButton>
          <ToggleButton value={'6'} onChange={handleChange} >{typeNames[6]}</ToggleButton>
          <ToggleButton value={'7'} onChange={handleChange} >{typeNames[7]}</ToggleButton>
          <ToggleButton value={'8'} onChange={handleChange} >{typeNames[8]}</ToggleButton>
        </ToggleButtonGroup>
      </form>
    </div>
  );
};


