const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Port to use when receivng form data and passing data through this port
const PORT = 3000;

// Create instance of express()
const app = express();

// Make bodyParser to handle json data
app.use(bodyParser.json());

// Use the cors package to have permission to access selected resource from a different orogin
app.use(cors());

// Set apiUrl


// Using to test a get requests
app.get('/', function (req, res) {
  res.send('Hello from server');
})

// Get all pet objects
app.route('pets').get((req, res) => {
})

// Get pet by petID
app.route('/api/pets/:petId').get((req, res) => {
  const requestedPetId = req.params['petId']
  res.send({ petId: requestedPetId })
})

// Add endpoint where the application will post data to
app.post('/getPetSearch', function (req, res) {
  console.log(req.body);
  res.status(200).send({ "message": "Data received" });
})

// Add new pet object to database
app.route('/api/pets').post((req, res) => {
  res.send(201, req.body)
})

// Delete pet object from database
app.route('/api/pets/:petId').delete((req, res) => {
  res.sendStatus(204)
})

// Listen to request on specified PORT
app.listen(PORT, function () {
  console.log("Server running on localhost:" + PORT)
});
