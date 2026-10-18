import { list, menuCost, type DrinkType, type Order } from "../../types/order";
import css from "./OrderSummary.module.css";

interface OrderSummaryProps{
  quantity: number;
  orderedDrinks: Order;
}

function OrderSummary({quantity, orderedDrinks}:OrderSummaryProps) {

  const totalSum =list.reduce((acc : number, item: DrinkType)=>{
          acc+=orderedDrinks[item]*menuCost[item];
          return acc;
        }, 0 );
  const sumDiscount =totalSum>= 300 ? (totalSum/10) : 0 ;
  return (
    <div className={css.container}>
      <p className={css.row}>
        Drinks: <strong>{quantity}</strong>
      </p>
      <p className={css.row}>
        Subtotal: <strong>{totalSum} UAH</strong>
      </p>
      <p className={css.row}>
        Discount: <strong>{sumDiscount} UAH</strong>
      </p>
      <p className={css.row}>
        Total: <strong>{totalSum - sumDiscount} UAH</strong>
      </p>
    </div>
  );
}

export default OrderSummary;
