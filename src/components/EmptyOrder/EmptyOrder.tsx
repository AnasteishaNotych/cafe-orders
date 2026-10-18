import css from "./EmptyOrder.module.css";

function EmptyOrder() {
  return <p className={css.message}>Your cart is empty</p>;
}

export default EmptyOrder;
