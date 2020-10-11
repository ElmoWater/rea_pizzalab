
import React, { useState, ChangeEvent, FormEvent } from "react";

interface CloseOrderButtonProps {
  closeOrder: AddTodo;
}

export const ButtonCloseOrder: React.FC<CloseOrderButtonProps> = ({ closeOrder }) => {
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeOrder();
  };

  return (
    <button type="submit" onClick={handleSubmit}>Close Order</button>
  );
};