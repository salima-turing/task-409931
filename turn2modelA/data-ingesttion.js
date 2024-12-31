// data-ingestion.js

const EventEmitter = require('events');

class DataIngestion extends EventEmitter {
    constructor(anomalyDetector) {
        super();
        this.anomalyDetector = anomalyDetector;

        // Listen for the 'transaction' event
        this.on('transaction', (data) => {
            this.anomalyDetector.analyze(data);
        });
    }

    // Method to simulate emitting transaction data
    simulateTransaction(data) {
        this.emit('transaction', data);
    }
}

module.exports = DataIngestion;
