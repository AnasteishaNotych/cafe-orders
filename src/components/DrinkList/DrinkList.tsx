import { list, menuCost, type DrinkType, type Operator, type Order } from "../../types/order";
import css from "./DrinkList.module.css";

interface DrinkListProps{
  orderedDrinks: Order;
  onOrder: (drink: DrinkType, operator: Operator)=> void;
}

function DrinkList({orderedDrinks, onOrder} : DrinkListProps) {

  
  return (
    <ul className={css.list}>
      {list.map((item)=>(<li className={css.item} key={item}>
        <span className={css.name}>{item.slice(0,1).toUpperCase()+item.slice(1).toLowerCase()}</span>
        <span className={css.price}> {menuCost[item]} UAH</span>
        <div className={css.controls}>
        {<button onClick={()=>onOrder(item, "-")} className={css.button} disabled={orderedDrinks[item]===0}>−</button>}
          <span className={css.count}>{orderedDrinks[item]}</span>
          <button onClick={()=>onOrder(item, "+")} className={css.button}>+</button>
        </div>
      </li>))}
    </ul>
  );
}

export default DrinkList;
