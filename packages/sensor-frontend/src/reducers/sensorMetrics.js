export const RECEIVE_SENSOR_METRICS = 'RECEIVE_SENSOR_METRICS';

export function receiveSensorMetrics(metrics) {
  return {
    type: RECEIVE_SENSOR_METRICS,
    metrics
  }
}

export default function sensorMetrics(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SENSOR_METRICS:
      return action.metrics
    default:
      return state
  }
}