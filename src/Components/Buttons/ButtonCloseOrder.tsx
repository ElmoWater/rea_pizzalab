
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from 'reactstrap';

interface CloseOrderButtonProps {
  closeOrder: AddTodo;
}

export const ButtonCloseOrder: React.FC<CloseOrderButtonProps> = ({ closeOrder }) => {
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    closeOrder();
  };

  return (
    <Button type="submit" onClick={handleSubmit} className="mt-5">Close Order</Button>
  );
};