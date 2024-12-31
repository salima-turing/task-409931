// utils.js

function calculateZScore(value, mean, stdDev) {
    if (stdDev === 0) return 0; // Prevent division by zero
    return (value - mean) / stdDev;
}

function calculateMovingAverage(transactions, windowSize) {
    const sum = transactions.slice(-windowSize).reduce((acc, transaction) => acc + transaction.amount, 0);
    return sum / windowSize;
}

module.exports = { calculateZScore, calculateMovingAverage };
