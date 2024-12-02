const mongoose = require('mongoose');

const envconfig = require('./env.config')

const uri = envconfig.MONGO_URI;

const connect = async () => {
  try {
    await mongoose.connect(uri);

    console.log('Connected successfully to database!');
  } catch (error) {
    console.log("[Error]: Can't connect to database!");
  }
}

module.exports = { connect };