
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from 'reactstrap';
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
    <Button type="submit" onClick={handleSubmit}>Close Pizza</Button>
  );
};