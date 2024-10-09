const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

async function connectToDatabase(){
  const client = await MongoClient.connect('momgodb://localhost:27017');
  database = client.db('online-shop');
}

function getDb(){
  if(!database){
    throw new Error('you must connect first');
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
}