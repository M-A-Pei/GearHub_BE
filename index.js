const express = require('express');
const cors = require('cors');
const router = require('./src/routes/routes');
const app = express();
const path = require('path');

app.use(cors());
app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static(path.join(__dirname, '/uploads')));

app.listen(3000, () => {
    console.log('Server started on port 3000');
})