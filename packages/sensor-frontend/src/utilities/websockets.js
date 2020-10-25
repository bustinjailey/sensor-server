import { receiveSensorMetrics } from '../reducers/sensorMetrics';
import { reportConnectionState } from '../reducers/sensorConnectionMonitor';

const ws = new WebSocket(`ws://localhost:8080`); // TODO: Parameterize

let clientOptions = {
  requestedMetricTypes: ['PUMP_1', 'PUMP_3', 'BLAH']
};

export function registerWebsocketHandlers(store) {
  let { dispatch } = store;
  ws.onmessage = function (event) {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case 'SENSOR_METRICS':
        dispatch(receiveSensorMetrics(data.payload));
        break;
      default:
        console.log('unknown data.type');
        break;
    }
  };

  ws.onopen = function (event) {
    ws.send(JSON.stringify({
      type: 'CLIENT_OPTIONS',
      payload: clientOptions
    }));
  };
}

export function startConnectionMonitor(store) {
  setInterval(() => {
    store.dispatch(reportConnectionState(ws.readyState));
  }, 1000)
}
