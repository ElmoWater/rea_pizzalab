import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


import ListIncrediences  from "./Components/Lists/ListIncredinences";
import ListPizzas  from "./Components/Lists/ListPizzas";
import ListOrderHistory  from "./Components/Lists/ListOrderHistory";

import {ButtonClosePizza} from "./Components/Buttons/ButtonClosePizza";
import {ButtonCloseOrder} from "./Components/Buttons/ButtonCloseOrder";

import {InputIncrediences} from "./Components/Inputs/InputIncrediences";
import {InputDough} from "./Components/Inputs/InputDough";
import {InputSize} from "./Components/Inputs/InputSize";
import {InputType} from "./Components/Inputs/InputType";
import {InputDrinks} from "./Components/Inputs/InputDrinks";

import {formatPrice} from "./Controllers/PriceController";
import {pricesIngredients,sizePrizes,doughPrices,typePrices,drinks} from "./config/prices";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';

import { Button } from 'reactstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export default function App() {
  //VARIABLES
  const plainPizza: Pizza = {dough:1,size:2,type:0,incrediences:[],price:0}
  const plainOrder: Order = {foods:[],drinks:[],total:0}
  
  //STORE
  const [incrediences, setIncrediences] = useState<string>("");
  const [dough, setDough] = useState<string>("1");
  const [size, setSize] = useState<string>("2");
  const [type, setType] = useState<string>("0");
  const [orderHistory, setOrderHistory] = useState<OrderHistory>([]);
/*
  useEffect(() => {
    console.log(orderHistory);
  }, [orderHistory]);
*/
  const [order, setOrder] = useState<Order>(plainOrder);
  useEffect(() => {
    calcOrderPrice();
  }, [order.foods,order.drinks]);

  const [pizza, setPizza] = useState<Pizza>(plainPizza);
  useEffect(() => {
    calcPizzaPrice();
  }, [pizza.incrediences,pizza.size,pizza.dough,pizza.type]);

  //FUNCTIONS
  const changeSize:ChangeSize=async(sizeInput)=>{
    setSize(sizeInput);
    setPizza(prevState => ({ ...prevState, size:parseInt(sizeInput)}));
  }
  const changeType:ChangeSize=async(typeInput)=>{
    setType(typeInput);
    setPizza(prevState => ({ ...prevState, type:parseInt(typeInput)}));
  }
  const changeDough:ChangeSize=async(doughInput)=>{
    setDough(doughInput);
    setPizza(prevState => ({ ...prevState, dough:parseInt(doughInput)}));
  }
  const changeIncrediences:ChangeIncrediences=async(incrediencesInput)=>{
    setIncrediences(incrediencesInput);
    let incrediences:Array<Incredience> = incrediencesInput.replace(/,+$/,'').split(",").map(Number);
    setPizza(prevState => ({ ...prevState, incrediences:incrediences}));
  } 
  const addDrinkToOrder = (drinkId:number):void=>{
    const newOrder:Array<Drink> = [...order.drinks,{type:drinkId,price:drinks[drinkId].price}];
    setOrder(prevState => ({ ...prevState, drinks:newOrder}));
  }
  const calcOrderPrice = ():void=>{
    let total = 0;
    order.drinks.map((drink)=>(
      total+=drink.price
    ))
    order.foods.map((pizza)=>(
      total+=pizza.price
    ))
    setOrder(prevState => ({ ...prevState, total:total}));
  }
  const calcPizzaPrice = ():void=>{
    let total = sizePrizes[pizza.size] + doughPrices[pizza.dough]+typePrices[pizza.type];
    pizza.incrediences.forEach(i=>{
      if(pricesIngredients[i]){
        total += pricesIngredients[i];
      }
    });    
    setPizza(prevState => ({ ...prevState, price:total}));
  }
  const closePizza = ():void=>{
    const newPizzas:Array<Pizza> = [...order.foods,pizza];
    setOrder(prevState => ({ ...prevState, foods:newPizzas}));
    setPizza(plainPizza);
    setIncrediences("");
    setDough("1");
    setSize("2");
    setType("0");
    

    
  }
  const closeOrder = ():void=>{
    setOrderHistory([...orderHistory,order]);
    setOrder(plainOrder);
    setPizza(plainPizza);
    setIncrediences("");
    setDough("1");
    setSize("2");
    setType("0");
  }


  


 















  return (
    <div className="appContainer container align-items-center">    
      <img
        className="logo"
        src={require('./assets/img/logo.png')} 
      /> 
      <h3 className="h3 mb-3 font-weight-normal ">PizzaLabCalc</h3>
      <InputDough dough={dough} changeDough={changeDough} pizza={pizza} />
      <InputSize size={size} changeSize={changeSize} pizza={pizza} />
      <InputType type={type} changeType={changeType} pizza={pizza} />
      <ListIncrediences pizza={pizza} />

      Extra Incrediences: <InputIncrediences incrediences={incrediences} changeIncrediences={changeIncrediences}/>
      <div>
        <Text>Total: {formatPrice(pizza.price)}</Text>
      </div>
      <div>
        <ButtonClosePizza closePizza={closePizza}/>
      </div>
      <hr />
      <ListPizzas order={order} />
      <InputDrinks addDrinkToOrder={addDrinkToOrder} />
      <ButtonCloseOrder closeOrder={closeOrder}/>
      <ListOrderHistory orderHistory={orderHistory} />
     
    </div>

  );
}

const stylesa = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
