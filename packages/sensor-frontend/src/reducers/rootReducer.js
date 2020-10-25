import { combineReducers } from 'redux'
import sensorMetrics from './sensorMetrics';
import sensorConnectionMonitor from './sensorConnectionMonitor';


export default combineReducers({
  sensorMetrics,
  sensorConnectionMonitor
})