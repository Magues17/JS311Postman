
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Task 1: Add two numbers
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = Number(num1) + Number(num2);
  res.send(result.toString());
});

// Task  
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) * Number(num2);
  res.send(result.toString());

});

// Task 3: Return the negative of a number
app.get('/negative/:num', (req, res) => {
  const num = Number(req.params.num);
  const negativeNum = -num;
  res.send(negativeNum.toString());
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});