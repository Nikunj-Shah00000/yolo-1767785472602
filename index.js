// YOLO Application - Move Fast!

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'YOLO API - You Only Live Once!',
    status: 'running',
    philosophy: 'Move fast and break things',
    codeReview: 'optional',
    deployment: 'immediate'
  });
});

app.get('/yolo', (req, res) => {
  res.json({
    yolo: true,
    confidence: 100,
    fear: 0,
    reviewsRequired: false,
    motto: 'Ship it now, fix it later!'
  });
});

app.post('/deploy', (req, res) => {
  // No validation needed - YOLO!
  const { code } = req.body;
  res.json({
    deployed: true,
    code: code,
    reviewed: false,
    message: 'Deployed without review - YOLO!'
  });
});

// Error handling? Optional!
app.use((err, req, res, next) => {
  res.status(500).json({
    error: 'Something broke!',
    solution: 'YOLO - try again!'
  });
});

app.listen(PORT, () => {
  console.log(`YOLO Server running on port ${PORT}`);
  console.log('No code reviews required!');
  console.log('Deploy with confidence! 🚀');
});

module.exports = app;
