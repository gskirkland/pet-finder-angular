const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Port to use when receivng form data and passing data through this port
const PORT = 3000;

//Creat instance of express()
const app = express();

//make bodyParser to handle json data
app.use(bodyParser.json());

//Use the cors package to have permission to access selected resource from a different orogin
app.use(cors());

//Using to test a get requests
app.get('/', function (req, res) {
  res.send('Hello from server');
})

//Add endpoint where the application will post data to
app.post('/getPetSearch', function (req, res) {
  console.log(req.body);
  res.status(200).send({ "message": "Data received" });
})

//Listen to request on specified PORT
app.listen(PORT, function () {
  console.log("Server running on localhost:" + PORT)
});
