const express = require('express');
const app = express();
const port = process.env.PORT || 6000;

// Define your API routes here
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is up and running' });
  }); 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
