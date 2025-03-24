const mongoose = require('mongoose');

const connectDb  = async () =>{
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/TODOP');

        console.log(`MongoDB connected : ${conn.connection.port}`);
    }
    catch(error){
        console.log(`Error : ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDb;
