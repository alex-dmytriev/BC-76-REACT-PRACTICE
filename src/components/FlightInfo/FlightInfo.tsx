import css from './FlightInfo.module.css';
import { IoIosAirplane } from 'react-icons/io';

const FlightInfo = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        AirMood – Flight Tracker <IoIosAirplane />
      </h1>
      <p>How was your last flight experience? Let us know!</p>
    </div>
  );
};

export default FlightInfo;
