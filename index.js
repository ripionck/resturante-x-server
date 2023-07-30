const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, From Server!');
});

app.listen(port, () => {
  console.log('Server is running!');
});
