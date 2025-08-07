import clsx from 'clsx';
import css from './Button.module.css';
import type { VariantsTypes } from '../../types/type';

interface ButtonProps {
  buttonName: string;
  variant?: VariantsTypes;
}

const Button = ({ buttonName, variant }: ButtonProps) => {
  console.log(variant);

  return (
    <button className={clsx(css.button, variant && css[variant])}>
      {buttonName}
    </button>
  );
};

export default Button;
