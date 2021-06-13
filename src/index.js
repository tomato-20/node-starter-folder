import express from 'express';
import ignoreFavicon from './middlewares/ignoreFavicon';
import genericErrorHandler from './middlewares/genericErrorHandler';

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

// prevent GET/favicon.io 404 error
app.use(ignoreFavicon);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(genericErrorHandler);

app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
});
