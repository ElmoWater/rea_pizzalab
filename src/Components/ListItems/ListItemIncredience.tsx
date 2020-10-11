import React from "react";
import {pricesIngredients,namesIngredients} from "../../config/prices";

interface TodoListItemProps {
  incredience:Incredience
}
export const IncredienceItem: React.FC<TodoListItemProps> = ({ incredience }) => {
  return (
    <li>
      { namesIngredients[incredience] } ({ pricesIngredients[incredience] } €)
    </li>
  );
};
