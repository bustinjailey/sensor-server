import { SessionMap } from '../session/index.js';

export default function getDataForClient(sessionId) {
  let clientOptions = getClientOptions(sessionId);

  let clientData = {
    type: 'SENSOR_METRICS',
    payload: {}
  };

  if(!clientOptions) {
    console.log(`clientOptions not available for sessionId ${sessionId}`);
    return {};
  }

  clientOptions.requestedMetricTypes.forEach(type => clientData.payload[type] = Math.random());

  return clientData;
}

function getClientOptions(sessionId) {
  return SessionMap.get(sessionId).clientOptions;
}