const mysql = require('mysql');
const mongodb = require('mongodb');

const mysqlConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myapp'
});

const mongoClient = new mongodb.MongoClient('mongodb://localhost:27017');

const queryUser = (id, callback) => {
  mysqlConn.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

const getDocument = async (collection, filter) => {
  const db = mongoClient.db('myapp');
  return db.collection(collection).findOne(filter);
};

module.exports = { mysqlConn, mongoClient, queryUser, getDocument };