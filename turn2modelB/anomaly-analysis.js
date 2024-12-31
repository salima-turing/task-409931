// anomaly-analysis.js

const { calculateZScore, calculateMovingAverage } = require('./utils');

class AnomalyAnalysis {
    constructor(threshold, movingAverageWindow) {
        this.threshold = threshold;
        this.movingAverageWindow = movingAverageWindow;
        this.transactions = [];
    }

    analyze(transaction) {
        this.transactions.push(transaction);

        // Simple threshold check
        if (transaction.amount > this.threshold) {
            this.notify(transaction, 'Threshold Alert');
        }

        // Advanced analysis with moving average and z-score
        if (this.transactions.length >= this.movingAverageWindow) {
            const movingAverage = calculateMovingAverage(this.transactions, this.movingAverageWindow);
            const zScore = calculateZScore(transaction.amount, movingAverage, this.calculateStandardDeviation());

            if (Math.abs(zScore) > 3) { // Common threshold for z-scores
                this.notify(transaction, 'Z-Score Alert');
            }
        }
    }

    calculateStandardDeviation() {
        const mean = this.transactions.reduce((sum, t) => sum + t.amount, 0) / this.transactions.length;
        const variance = this.transactions.reduce((sum, t) => sum + Math.pow(t.amount - mean, 2), 0) / this.transactions.length;
        return Math.sqrt(variance);
    }

    notify(transaction, alertType) {
        console.log(`ALERT: ${alertType} for transaction:`, transaction);
    }
}

module.exports = AnomalyAnalysis;
