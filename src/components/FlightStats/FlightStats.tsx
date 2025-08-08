import type { Mood } from "../../types/type";

interface FlightStatsProps {
  mood: Mood;
  totalMood: number;
  positiveMood: number;
}

const FlightStats = ({ mood, totalMood, positiveMood }: FlightStatsProps) => {
  return (
    <div>
      <p>Smooth Landing: {mood.smooth}</p>
      <p>Just Okay: {mood.okey}</p>
      <p>Turbulent Ride: {mood.ride}</p>
      <p>Total: {totalMood} </p>
      <p>Positive: {positiveMood}%</p>
    </div>
  );
};

export default FlightStats;
