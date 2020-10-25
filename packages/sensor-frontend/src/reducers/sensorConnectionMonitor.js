export const REPORT_CONNECTION_STATE = 'REPORT_CONNECTION_STATE';

export function reportConnectionState(readyState) {
  return {
    type: REPORT_CONNECTION_STATE,
    readyState
  }
}

export default function sensorConnectionMonitor(state = WebSocket.CLOSED, action) {
  switch (action.type) {
    case REPORT_CONNECTION_STATE:
      return action.readyState;
    default:
      return state
  }
}