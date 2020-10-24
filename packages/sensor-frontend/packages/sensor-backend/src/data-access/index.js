import MetricTypes from "../constants/metricTypes";

export default function getDataForClient(sessionId) {
  var { requestedMetricTypes } = getClientSettings(sessionId);

  return requestedMetrics;
}

function getClientSettings(sessionId) {
  clientSettingsMap[sessionId] = {
    requestedMetricTypes: [MetricTypes.PUMP_1, MetricTypes.PUMP_3, MetricTypes.WHO_KNOWS_2]
  }

  return clientSettingsMap[clientId]
}