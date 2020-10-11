type Todo = string; 
type AddTodo = () => void; 
type ChangeIncrediences = (incrediences:string) => void; 
type ChangeSize = (size:string) => void; 
type ChangeDough = (dough:string) => void; 
type ChangeType = (type:string) => void; 
type AddDrinkToOrder = (number) => void;

type Incredience = number;
type OrderHistory = Array<Order>
type Drink = {
  type: number,
  price: float
};

type Pizza = {
  dough: number,
  size: number,
  type: number,
  incrediences: Array<Incredience>,
  price: float
};
type Order = {
  foods: Array<Pizza>,
  drinks: Array<Drink>,
  total: float
}