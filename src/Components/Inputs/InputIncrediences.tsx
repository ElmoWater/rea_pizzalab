import React, { useState, ChangeEvent, FormEvent } from "react";

interface InputFieldProps {
  incrediences: string,
  changeIncrediences:ChangeIncrediences;
}

export const InputIncrediences: React.FC<InputFieldProps> = ({ incrediences,changeIncrediences }) => {

  //const [incrediences, setIncrediences] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //setIncrediences(e.target.value);
    changeIncrediences(e.target.value);
  };

  return (
    <input type="text" value={incrediences} onChange={handleChange} />
  );
};

