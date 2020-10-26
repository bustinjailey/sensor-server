import './App.css';
import SensorGridContainer from './components/SensorGridContainer';
import ConnectionStatus from './components/ConnectionStatus';
import Tabs from './components/Tabs';
import MainScreen from './components/MainScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text align-left">TBM Dashboard</div>
        <ConnectionStatus />
      </header>
      <Tabs>
        <div label="Main Screen">
          <MainScreen />
        </div>
        <div label="Second Screen">
          <MainScreen />  
        </div>
        <div label="More">
          <SensorGridContainer />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
