import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IncrediencesList  from "./components/ListIncredinences";
import {TodoListButton} from "./components/ButtonClosePizza"
import {InputIncrediences} from "./components/InputIncrediences"
import {InputDough} from "./components/InputDough"
import {InputSize} from "./components/InputSize"

import {pricesIngredients} from "./config/prices";


export default function App() {
  const plainPizza: Pizza = {dough:1,size:1,incrediences:[],price:0}
  const [pizza, setPizza] = useState<Pizza>(plainPizza);

  const changeIncrediences:ChangeIncrediences=async(incrediencesInput)=>{
    let incrediences:Array<Incredience> = incrediencesInput.split(",").map(Number);
    setPizza(prevState => ({ ...prevState, incrediences:incrediences}));
    calcPrice();
  } 
  const calcPrice = ():void=>{
    let total = 4.6;
    pizza.incrediences.forEach(i=>{
      if(pricesIngredients[i]){
        total += pricesIngredients[i];
      }
    });    
    setPizza(prevState => ({ ...prevState, price:total.toFixed(2)}));
  }
  const closePizza = ():void=>{
    setPizza(plainPizza);
  }
  return (
    <View style={styles.container}>
      <Text>PizzaLabCalc</Text>
      <InputDough pizza={pizza} />
      <InputSize pizza={pizza} />
      <IncrediencesList pizza={pizza} />
      <Text>Total: {pizza.price}€</Text>
      <InputIncrediences changeIncrediences={changeIncrediences}/>
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
