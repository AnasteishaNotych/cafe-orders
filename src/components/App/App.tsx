import { useState } from "react";
import ShopInfo from "../ShopInfo/ShopInfo";
import css from  "./App.module.css";
import {type DrinkType, type Operator, type  Order } from "../../types/order";
import DrinkList from "../DrinkList/DrinkList";
import OrderSummary from "../OrderSummary/OrderSummary";
import EmptyOrder from "../EmptyOrder/EmptyOrder";
import ClearButton from "../ClearButton/ClearButton";

function App() {
  const [orderedDrinks, setOrderedDrinks] = useState<Order>({
    espresso: 0,
    latte: 0,
    tea: 0,
});

const totalDrinks=orderedDrinks.espresso+orderedDrinks.latte+orderedDrinks.tea;

function handleOrderedDrinks(drink: DrinkType, operator: Operator){
if(operator==="+"){setOrderedDrinks((prevOrderedDrinks)=>({
  ...prevOrderedDrinks,
  [drink] : prevOrderedDrinks[drink]+1
}))}
else if (orderedDrinks[drink]!=0){setOrderedDrinks((prevOrderedDrinks)=>({
  ...prevOrderedDrinks,
  [drink] : prevOrderedDrinks[drink]-1
}))}
}

function handleReset(){
  setOrderedDrinks({espresso: 0,
    latte: 0,
    tea: 0,})
}

  return (
    <div className={css.app}>
      <ShopInfo />
      <DrinkList orderedDrinks={orderedDrinks} onOrder={handleOrderedDrinks}/> 
      {totalDrinks ? <><OrderSummary quantity={totalDrinks} orderedDrinks={orderedDrinks} /> <ClearButton onReset={handleReset}/></> : <EmptyOrder />}
    </div>
  );
}

export default App;
