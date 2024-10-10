const express = require('express');
const app = express();
const port = 3000;

// Route to get user IP address
app.get('/get-ip', (req, res) => {
  // Retrieve the user's IP address from the request object
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  
  // Send the IP address as the response
  res.json({ ip: ipAddress }); 
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); 
});