import './App.css';
import SensorGridContainer from './components/SensorGridContainer';
import ConnectionStatus from './components/ConnectionStatus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">Sensor Display</div>
        <ConnectionStatus />
      </header>
      <SensorGridContainer />
    </div>
  );
}

export default App;
