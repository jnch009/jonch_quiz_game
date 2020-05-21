const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const csvFilePath = path.resolve(__dirname, './public/quizQuestions.csv');
const csv = require('csvtojson');
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log(csvFilePath);
  csv()
    .fromFile(csvFilePath)
    .then(jsonObj => {
      res.send(jsonObj);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
