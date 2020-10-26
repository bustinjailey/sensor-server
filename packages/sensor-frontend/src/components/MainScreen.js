import './MainScreen.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ metrics: state.sensorMetrics });

function MainScreen(props) {
  let metrics = props.metrics;

  // TODO: Replace divs with meter UI thingies
  return (
    <div className="grid">
      <div className="cell">{metrics.PLACEHOLDER_1}</div>
      <div className="cell">{metrics.PLACEHOLDER_2}</div>
      <div className="cell">{metrics.PLACEHOLDER_3}</div>
      <div className="cell">{metrics.PLACEHOLDER_4}</div>
      <div className="cell">{metrics.PLACEHOLDER_5}</div>
      <div className="cell">{metrics.PLACEHOLDER_6}</div>
      <div className="cell">{metrics.PLACEHOLDER_7}</div>
      <div className="cell">{metrics.PLACEHOLDER_8}</div>
      <div className="cell">{metrics.PLACEHOLDER_9}</div>
    </div>
  )
}

export default connect(mapStateToProps)(MainScreen);
