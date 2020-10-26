import GridLayout from 'react-grid-layout';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ metrics: state.sensorMetrics });

export function SensorGridContainer(props) {
  return (
    <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
      <div key="a" data-grid={{ x: 0, y: 0, w: 2, h: 2 }}>Thing 1: {props.metrics.PUMP_1}</div>
      <div key="b" data-grid={{ x: 1, y: 1, w: 2, h: 2 }}>Thing 2: {props.metrics.PUMP_3}</div>
      <div key="c" data-grid={{ x: 2, y: 2, w: 2, h: 2 }}>Thing 3: {props.metrics.BLAH}</div>
    </GridLayout>
  )
}

export default connect(mapStateToProps)(SensorGridContainer);