// index.js

const DataIngestion = require('./data-ingestion');
const AnomalyAnalysis = require('./anomaly-analysis');

// Configuration for anomaly detection
const threshold = 1000; // Example threshold
const movingAverageWindow = 5; // Number of transactions to consider for moving average

const anomalyDetector = new AnomalyAnalysis(threshold, movingAverageWindow);
const dataIngestion = new DataIngestion(anomalyDetector);

// Function to simulate incoming transactions at regular intervals
function generateRandomTransaction() {
    // Generate a random transaction amount between 100 and 5000
    const transaction = {
        id: Date.now(), // Use timestamp as a unique ID
        amount: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
    };
    dataIngestion.simulateTransaction(transaction);
}

// Simulate incoming transactions every 2 seconds
setInterval(generateRandomTransaction, 2000);
