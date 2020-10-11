import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListIncrediences  from "./components/ListIncredinences";
import ListPizzas  from "./components/ListPizzas";

import {TodoListButton} from "./components/ButtonClosePizza";

import {InputIncrediences} from "./components/InputIncrediences";
import {InputDough} from "./components/InputDough";
import {InputSize} from "./components/InputSize";
import {InputType} from "./components/InputType";

import {pricesIngredients,sizePrizes,doughPrices, typePrices} from "./config/prices";


export default function App() {
  //VARIABLES
  const plainPizza: Pizza = {dough:1,size:2,type:0,incrediences:[],price:0}
  const plainOrder: Order = {foods:[],drinks:[]}
  
  //STORE
  const [incrediences, setIncrediences] = useState<string>("");
  const [order, setOrder] = useState<Order>(plainOrder);
  const [pizza, setPizza] = useState<Pizza>(plainPizza);
  useEffect(() => {
    calcPrice();
  }, [pizza.incrediences,pizza.size,pizza.dough,pizza.type]);

  //FUNCTIONS
  const changeSize:ChangeSize=async(sizeInput)=>{
    setPizza(prevState => ({ ...prevState, size:parseInt(sizeInput)}));
  }
  const changeType:ChangeSize=async(typeInput)=>{
    setPizza(prevState => ({ ...prevState, type:parseInt(typeInput)}));
  }
  const changeDough:ChangeSize=async(doughInput)=>{
    setPizza(prevState => ({ ...prevState, dough:parseInt(doughInput)}));
  }
  const changeIncrediences:ChangeIncrediences=async(incrediencesInput)=>{
    setIncrediences(incrediencesInput);
    let incrediences:Array<Incredience> = incrediencesInput.replace(/,+$/,'').split(",").map(Number);
    setPizza(prevState => ({ ...prevState, incrediences:incrediences}));
  } 
  const calcPrice = ():void=>{
    let total = sizePrizes[pizza.size] + doughPrices[pizza.dough]+typePrices[pizza.type];

    pizza.incrediences.forEach(i=>{
      if(pricesIngredients[i]){
        total += pricesIngredients[i];
      }
    });    
    setPizza(prevState => ({ ...prevState, price:total.toFixed(2)}));
  }
  const closePizza = ():void=>{
    const newList = order;
    newList.foods.push(pizza);
    setOrder(newList);

    //setOrder(prevState => ({ ...prevState, foods:[pizza]}));
    setPizza(plainPizza);
    setIncrediences("");
  }
  return (
    <View style={styles.container}>
      <Text>PizzaLabCalc</Text>
      <InputDough changeDough={changeDough} pizza={pizza} />
      <InputSize changeSize={changeSize} pizza={pizza} />
      <InputType changeType={changeType} pizza={pizza} />
      <ListIncrediences pizza={pizza} />
      <ListPizzas order={order} />
      <Text>Total: {pizza.price}€</Text>

      <InputIncrediences incrediences={incrediences} changeIncrediences={changeIncrediences}/>
      <TodoListButton closePizza={closePizza}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
