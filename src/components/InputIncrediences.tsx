
import React, { useState, ChangeEvent, FormEvent } from "react";

interface InputFieldProps {
  changeIncrediences:ChangeIncrediences;
}

export const InputIncrediences: React.FC<InputFieldProps> = ({ changeIncrediences }) => {

  const [incrediences, setIncrediences] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIncrediences(e.target.value);
    changeIncrediences(e.target.value.replace(/,+$/,''));
  };

  return (
    <input type="text" value={incrediences} onChange={handleChange} />
  );
};

