import ButtonsInfo from '../ButtonsInfo/ButtonsInfo';
import FlightInfo from '../FlightInfo/FlightInfo';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <FlightInfo />
      <ButtonsInfo />
    </div>
  );
};

export default App;
