import React from "react";
//import { Todo, ToggleComplete } from "./types";
import { TodoListItem } from "./ListItemIncredience";


interface TodoListProps {
  pizza:Pizza
}

const TodoList: React.FC<TodoListProps> = ({pizza}) => {
  return (
    <ul>
    {pizza.incrediences.map(incredience => (
        <TodoListItem incredience={incredience} />
    ))}
  </ul>
  );
};
export default TodoList;