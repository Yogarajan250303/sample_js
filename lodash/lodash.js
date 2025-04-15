const express = require('express');
const _ = require('lodash');
const app = express();

app.use(express.json());

// Lodash Math Routes
const lodashRouter = express.Router();

// Sum - expects { "a": number, "b": number } in request body
lodashRouter.post('/addition', (req, res) => {
  const { a, b } = req.body;
  if (_.isNil(a) || _.isNil(b)) {
    return res.status(400).json({ error: 'Both "a" and "b" are required' });
  }
  res.json({ result: _.add(a, b) });
});

// Subtraction - expects { "a": number, "b": number }
lodashRouter.post('/subtraction', (req, res) => {
  const { a, b } = req.body;
  if (_.isNil(a) || _.isNil(b)) {
    return res.status(400).json({ error: 'Both "a" and "b" are required' });
  }
  res.json({ result: _.subtract(a, b) });
});

// Multiplication - expects { "a": number, "b": number }
lodashRouter.post('/multiplication', (req, res) => {
  const { a, b } = req.body;
  if (_.isNil(a) || _.isNil(b)) {
    return res.status(400).json({ error: 'Both "a" and "b" are required' });
  }
  res.json({ result: _.multiply(a, b) });
});

// Division - expects { "a": number, "b": number }
lodashRouter.post('/division', (req, res) => {
  const { a, b } = req.body;
  if (_.isNil(a) || _.isNil(b)) {
    return res.status(400).json({ error: 'Both "a" and "b" are required' });
  }
  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }
  res.json({ result: _.divide(a, b) });
});

// Mount the lodash router
app.use('/lodash', lodashRouter);

// Basic route
app.get('/', (req, res) => {
  res.send('Lodash Math API - Use /lodash endpoints');
});


app.listen(1000, () => {
  console.log(`Server running on http://localhost:${1000}`);
});