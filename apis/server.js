const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const routes = require('./routes/index');


const corsOptions = {
    credentials: true,
    origin: [ 'http://localhost:5174', 'http://localhost:5173' ],
};
app.use(cors(corsOptions)); 
app.use(express.json());
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use(routes);
app.use(express.static('uploads'))

const folderName = 'uploads';
const folderPath = path.join(__dirname, folderName);
try {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  } 
} catch (err) {
  console.error('Error creating folder:', err);
}


app.listen(process.env.APP_PORT, ()=>{
    console.log("App running on port: ", process.env.APP_PORT);
});