import css from "./SearchBoxTasks.module.css";

interface SearchBoxTasksProps {
  onChange: (value: string) => void;
}

const SearchBoxTasks = ({ onChange }: SearchBoxTasksProps) => {
  return (
    <input
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className={css.input}
      type="text"
      name="search"
    />
  );
};

export default SearchBoxTasks;
