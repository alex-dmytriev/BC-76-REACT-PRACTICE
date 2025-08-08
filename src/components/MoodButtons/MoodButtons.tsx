import type { MoodTypes } from "../../types/type";
import css from "./MoodButtons.module.css";

interface MoodButtonsProps {
  handleClick: (value: MoodTypes) => void;
  totalMood: number;
  resetMood: () => void;
}

const MoodButtons = ({
  handleClick,
  totalMood,
  resetMood,
}: MoodButtonsProps) => {
  return (
    <ul className={css.list}>
      <li>
        <button
          onClick={() => handleClick("smooth")}
          className={`${css.button} ${css.smooth}`}
        >
          Smooth Landing
        </button>
      </li>
      <li>
        <button
          onClick={() => handleClick("okey")}
          className={`${css.button} ${css.okey}`}
        >
          Just Okay
        </button>
      </li>
      <li>
        <button
          onClick={() => handleClick("ride")}
          className={`${css.button} ${css.ride}`}
        >
          Turbulent Ride
        </button>
      </li>
      {totalMood > 0 && (
        <li>
          <button onClick={resetMood} className={`${css.button} ${css.clear}`}>
            Clear Feedback
          </button>
        </li>
      )}
    </ul>
  );
};

export default MoodButtons;
