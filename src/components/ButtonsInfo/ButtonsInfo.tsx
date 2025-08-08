import css from "./ButtonsInfo.module.css";
import Button from "../Button/Button";
import type { VariantsTypes } from "../../types/type";

interface ButtonType {
  name: string;
  value: VariantsTypes;
}

const buttons: ButtonType[] = [
  { name: "Smooth Landing", value: "smooth" },
  { name: "Just Okay", value: "okey" },
  { name: "  Turbulent Ride", value: "ride" },
  { name: "Clear Feedback", value: "clear" },
];

const ButtonsInfo = () => {
  return (
    <ul className={css.list}>
      {buttons.map((item) => (
        <li key={item.value}>
          <Button buttonName={item.name} variant={item.value} />
        </li>
      ))}
    </ul>
    // <ul className={css.list}>
    //   {buttons.map((item) => (
    //     <li key={item.value}>
    //       <button className={clsx(css.button, css[item.value])}>
    //         {item.name}
    //       </button>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default ButtonsInfo;
