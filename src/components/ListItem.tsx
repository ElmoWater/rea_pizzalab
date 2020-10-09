import React from "react";
//import "./TodoListItem.css";
/*
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}
*/
interface TodoListItemProps {
  item: string
}
export const TodoListItem: React.FC<TodoListItemProps> = ({ item }) => {
  return (
    <li>
      {item} €
    </li>
  );
};
