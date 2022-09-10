const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(8080, function() {
  console.log("Running on port 8080.");
});