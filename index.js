// index.js

const DataIngestion = require('./data-ingestion');
const AnomalyAnalysis = require('./anomaly-analysis');

const threshold = 1000; // Example threshold
const movingAverageWindow = 5; // Number of transactions to consider for moving average

const anomalyDetector = new AnomalyAnalysis(threshold, movingAverageWindow);
const dataIngestion = new DataIngestion(anomalyDetector);

// Simulating incoming transaction data
const transactions = [
    { id: 1, amount: 500 },
    { id: 2, amount: 1200 }, // Above threshold
    { id: 3, amount: 700 },
    { id: 4, amount: 800 },
    { id: 5, amount: 900 },
    { id: 6, amount: 3000 }, // Z-score alert if the average is significantly lower
];

dataIngestion.ingest(transactions);
