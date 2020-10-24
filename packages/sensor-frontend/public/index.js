const rss = document.getElementById('rss');
const heapTotal = document.getElementById('heapTotal');
const heapUsed = document.getElementById('heapUsed');
const external = document.getElementById('external');
const ws = new WebSocket(`ws://${location.host}`);

function startApp() {
  ws.onmessage = function (event) {
    const data = JSON.parse(event.data);

    rss.textContent = data.rss;
    heapTotal.textContent = data.heapTotal;
    heapUsed.textContent = data.heapUsed;
    external.textContent = data.external;
  };

  var clientOptions = {
    requestedMetricTypes: ['PUMP_1', 'PUMP_3']
  };

  ws.onopen = function (event) {
    ws.send(JSON.stringify({
      type: 'CLIENT_OPTIONS',
      payload: clientOptions
    }));
  }
};