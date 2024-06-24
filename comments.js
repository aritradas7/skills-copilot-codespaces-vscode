// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const comments = require('./comments');

// Use body-parser middleware
app.use(bodyParser.json());

// Set up route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Set up route to get a specific comment
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Set up route to post a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Set up route to update a comment
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  Object.assign(comment, req.body);
  res.json(comment);
});

// Set up route to delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = comments.findIndex(comment => comment.id === id);
  comments.splice(index, 1);
  res.json({ success: true });
});

// Start server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});