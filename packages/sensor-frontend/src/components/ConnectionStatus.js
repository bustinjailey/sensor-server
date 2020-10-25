import { connect } from 'react-redux';

const mapStateToProps = state => ({ readyState: state.sensorConnectionMonitor });

export function ConnectionStatus(props) {
  let statusText = null;
  let statusColor = null;

  switch (props.readyState) {
    case WebSocket.CLOSED:
      statusText = 'Closed';
      statusColor = 'red';
      break;
    case WebSocket.CLOSING:
      statusText = 'Closing';
      statusColor = 'yellow';
      break;
    case WebSocket.CONNECTING:
      statusText = 'Connecting';
      statusColor = 'yellow';
      break;
    case WebSocket.OPEN:
      statusText = 'Connected';
      statusColor = 'Green';
      break;
    default:
      statusText = 'Disconnected';
      statusColor = 'red';
  }

  return (
    <div className="header-text align-right" style={{ color: statusColor }}>{statusText}</div >
  );
}

export default connect(mapStateToProps)(ConnectionStatus);