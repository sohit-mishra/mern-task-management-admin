const mongoose = require('mongoose');
const env = require('./env');
const {red , green } = require('colorette');

const connectDB = async () => {
    try{
        await mongoose.connect(env.MONGO_URI || 'mongodb://localhost:2707/myapp');
        console.log(green('MongoDB connected successfully'));
    }catch(error){
        console.log(red('Error connecting to MongoDB:',error.message));
        process.exit(1);
    }
}

module.exports = connectDB;