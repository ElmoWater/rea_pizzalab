import React from "react";
import {pricesIngredients,namesIngredients} from "../../config/prices";

interface TodoListItemProps {
  incredience:Incredience
}
export const IncredienceItem: React.FC<TodoListItemProps> = ({ incredience }) => {
  return (
    <span>
      + { namesIngredients[incredience] } ({ pricesIngredients[incredience] } €) 
    </span>
  );
};
