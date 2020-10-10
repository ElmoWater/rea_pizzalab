type Todo = string;
type AddTodo = () => void; 
type ChangeIncrediences = (incrediences:string) => void; 

type Incredience = number;
type Drink = number;
type Pizza = {
  dough: number,
  size: number,
  incrediences: Array<Incredience>,
  price: float
};
type Order = {
  foods: Array<Pizza>,
  drinks: Array<Drink>
}