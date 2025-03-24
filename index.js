const express = require('express');
const app = express();
const authRoute = require('./routes/authRoute.js');
const connectDB = require('./config/db.js');
const taskRoute = require('./routes/taskRoutes.js');


connectDB();
app.use(express.json());

app.use('/auth',authRoute);
app.use('/task',taskRoute);

app.get('/',()=>{
    console.log('abdsjhd app get');
});


app.listen(3001, ()=>{
    console.log('http://localhost:3001');
})