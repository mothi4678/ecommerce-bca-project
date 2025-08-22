const express = require('express');
const app = express();

// Add this line to serve static files from the 'public' folder
app.use(express.static('public')); 

// ... rest of your code
const port = 3000;

// This is a route handler. It tells the server what to do
// when a user sends a GET request to the homepage ('/').
//app.get('/', (req, res) => {
//  res.send('Hello World!');
//});

// This line starts the server and makes it listen for requests
// on the specified port.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});