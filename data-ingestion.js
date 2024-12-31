// data-ingestion.js

class DataIngestion {
    constructor(anomalyDetector) {
        this.anomalyDetector = anomalyDetector;
    }

    ingest(data) {
        // Simulating the ingestion of transaction data
        data.forEach(transaction => this.anomalyDetector.analyze(transaction));
    }
}

module.exports = DataIngestion;
