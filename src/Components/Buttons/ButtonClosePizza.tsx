
import React, { useState, ChangeEvent, FormEvent } from "react";

interface ClosePizzaButtonProps {
  closePizza: AddTodo;
}

export const ButtonClosePizza: React.FC<ClosePizzaButtonProps> = ({ closePizza }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closePizza();
  };

  return (
    <button type="submit" onClick={handleSubmit}>Click</button>
  );
};