
import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  closePizza: AddTodo;
}

export const TodoListButton: React.FC<AddTodoFormProps> = ({ closePizza }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closePizza();
  };

  return (
    <button type="submit" onClick={handleSubmit}>Click</button>
  );
};