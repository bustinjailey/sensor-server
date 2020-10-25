const metricParentDiv = document.getElementById('metricParentDiv');
const ws = new WebSocket(`ws://${location.host}`);

let clientOptions = {
  requestedMetricTypes: ['PUMP_1', 'PUMP_3', 'BLAH']
};

let MetricDomNodeMap = null;

function startApp() {
  registerWebsocketHandlers();
  startConnectionMonitor()
};

function registerWebsocketHandlers() {
  ws.onmessage = function (event) {
    const data = JSON.parse(event.data);
    switch (data.type) {
      case 'SENSOR_METRICS':
        displaySensorMetrics(data.payload);
    }
  };

  ws.onopen = function (event) {
    ws.send(JSON.stringify({
      type: 'CLIENT_OPTIONS',
      payload: clientOptions
    }));
  };
}

function startConnectionMonitor() {
  let connectionMonitorDiv = document.getElementById('connectionMonitorDiv');
  setInterval(() => {
    let connectionStatus = '';
    if (ws.readyState == WebSocket.OPEN) {
      connectionStatus = 'OPEN';
    } else if (ws.readyState == WebSocket.CONNECTING) {
      connectionStatus = 'CONNECTING';
    } else if (ws.readyState == WebSocket.CLOSING) {
      connectionStatus = 'CLOSING';
    } else if (ws.readyState == WebSocket.CLOSED) {
      connectionStatus = 'CLOSED';
    }

    connectionMonitorDiv.innerText = `Connection ${connectionStatus}`
    connectionMonitorDiv.style.color = ws.readyState == WebSocket.OPEN ? 'green' : ws.readyState == WebSocket.CLOSED ? 'red' : 'yellow';
  }, 1000)
}

function displaySensorMetrics(values) {
  if (MetricDomNodeMap == null) {
    MetricDomNodeMap = new Map();
    for (const property in values) {
      metricDiv = document.createElement('div');
      MetricDomNodeMap.set(property, metricDiv);
      metricParentDiv.appendChild(metricDiv);
    }
  }

  for (const property in values) {
    let metricDiv = MetricDomNodeMap.get(property);
    metricDiv.innerText = `${property}: ${values[property]}`;
  }
}