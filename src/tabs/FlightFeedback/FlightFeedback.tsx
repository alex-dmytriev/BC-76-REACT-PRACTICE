import { useState } from "react";
import type { Mood, MoodTypes } from "../../types/type";
import FlightInfo from "../../components/FlightInfo/FlightInfo";
import MoodButtons from "../../components/MoodButtons/MoodButtons";
import FlightStats from "../../components/FlightStats/FlightStats";
import Notification from "../../components/Notification/Notification";
import css from "./FlightFeedback.module.css";

const FlightFeedback = () => {
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
}

export default FlightFeedback

