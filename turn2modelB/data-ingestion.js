// data-ingestion.js
const EventEmitter = require('events');
const AnomalyAnalysis = require('./anomaly-analysis');

class DataIngestion extends EventEmitter {
    constructor(anomalyDetector) {
        super();
        this.anomalyDetector = anomalyDetector;
    }

    startListening() {
        // Start listening for 'transaction' events
        this.on('transaction', transaction => this.anomalyDetector.analyze(transaction));
    }
}

module.exports = DataIngestion;
