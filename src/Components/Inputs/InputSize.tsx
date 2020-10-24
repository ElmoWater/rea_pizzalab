import React, { useState, ChangeEvent, FormEvent } from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
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
        <ToggleButtonGroup className="mt-1" type='radio' name='size' defaultValue={'2'}>
          <ToggleButton value={'1'} onChange={handleChange} >{sizeNames[1]}</ToggleButton>
          <ToggleButton value={'2'} onChange={handleChange} >{sizeNames[2]}</ToggleButton>
          <ToggleButton value={'3'} onChange={handleChange} >{sizeNames[3]}</ToggleButton>
        </ToggleButtonGroup>
      </form>
    </div>
  );
}; 




      
