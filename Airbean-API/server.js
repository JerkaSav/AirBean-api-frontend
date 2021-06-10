const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const { db } = require('./db/db-operations');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

function initiateDataBase() {
  db.defaults({ accounts: [], orders: [] }).write();
}

app.listen(9999, () => {
  console.log('Server on 9999');
  initiateDataBase();
});
