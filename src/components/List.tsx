import React from "react";
//import { Todo, ToggleComplete } from "./types";
import { TodoListItem } from "./ListItem";


interface TodoListProps {
  item:Array<Todo>

  //  todos: Array<Todo>;
//  toggleComplete: ToggleComplete;
}

const TodoList: React.FC<TodoListProps> = ({item}) => {
  return (
    <ul>
    {item.map(todo => (
        <TodoListItem item={todo} />
    ))}
  </ul>
  );
};
export default TodoList;