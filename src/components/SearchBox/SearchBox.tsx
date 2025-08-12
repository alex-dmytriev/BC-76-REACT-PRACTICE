import css from "./SearchBox.module.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

interface SearchBoxProps {
  handleSubmit: (value: string) => void;
}

const SearchBox = ({ handleSubmit }: SearchBoxProps) => {
  const onSubmit = (formData: FormData) => {
    const value = formData.get("search") as string;
    if (!value.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    handleSubmit(value);
  };
  return (
    <form className={css.form} action={onSubmit}>
      <input className={css.input} type="text" name="search" />
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
};

export default SearchBox;
