import css from "./ClearButton.module.css";

interface ClearButtonProps{
  onReset: ()=> void;
}

function ClearButton({onReset}:ClearButtonProps) {
  return <button onClick={onReset} className={css.button}>Clear order</button>;
}

export default ClearButton;
