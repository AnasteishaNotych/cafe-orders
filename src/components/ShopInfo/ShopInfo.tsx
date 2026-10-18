import css from "./ShopInfo.module.css";

function ShopInfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Bean There Coffee</h1>
      <p className={css.description}>Choose your drinks and see the total.</p>
    </div>
  );
}

export default ShopInfo;
