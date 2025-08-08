import { useState } from "react";
import FlightInfo from "../FlightInfo/FlightInfo";
import css from "./App.module.css";
import type { Mood, MoodTypes } from "../../types/type";
import MoodButtons from "../MoodButtons/MoodButtons";
import FlightStats from "../FlightStats/FlightStats";
import Notification from "../Notification/Notification";

const App = () => {
  const [mood, setMood] = useState<Mood>({
    smooth: 0,
    okey: 0,
    ride: 0,
  });

  const handleClick = (value: MoodTypes) => {
    setMood({ ...mood, [value]: mood[value] + 1 });
  };

  const resetMood = () => {
    setMood({ smooth: 0, okey: 0, ride: 0 });
  };

  const totalMood = mood.okey + mood.ride + mood.smooth;
  const positiveMood = Math.round((mood.smooth / totalMood) * 100);

  return (
    <div className={css.container}>
      <FlightInfo />
      <MoodButtons
        handleClick={handleClick}
        totalMood={totalMood}
        resetMood={resetMood}
      />

      {totalMood > 0 ? (
        <FlightStats
          mood={mood}
          totalMood={totalMood}
          positiveMood={positiveMood}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
