// simulate-live-data.js
const DataIngestion = require('./data-ingestion');
const AnomalyAnalysis = require('./anomaly-analysis');

const threshold = 1000; // Example threshold
const movingAverageWindow = 5; // Number of transactions to consider for moving average

const anomalyDetector = new AnomalyAnalysis(threshold, movingAverageWindow);
const dataIngestion = new DataIngestion(anomalyDetector);

dataIngestion.startListening();

// Simulate live data stream
function simulateLiveTransactions() {
    setInterval(() => {
        const randomAmount = Math.floor(Math.random() * 5000) + 1; // Random amount between 1 and 5000
        const transaction = { id: Date.now(), amount: randomAmount };
        console.log('Incoming Transaction:', transaction);
        dataIngestion.emit('transaction', transaction);
    }, 2000); // Simulate a new transaction every 2 seconds
}

simulateLiveTransactions();
