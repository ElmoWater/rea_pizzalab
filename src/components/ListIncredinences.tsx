import React from "react";
//import { Todo, ToggleComplete } from "./types";
import { IncredienceItem } from "./ListItemIncredience";


interface IncrediencesListProps {
  pizza:Pizza
}

const IncrediencesList: React.FC<IncrediencesListProps> = ({pizza}) => {
  return (
    <ul>
    {pizza.incrediences.map((incredience, index) => (
        <IncredienceItem key={index} incredience={incredience} />
    ))}
  </ul>
  );
};
export default IncrediencesList;