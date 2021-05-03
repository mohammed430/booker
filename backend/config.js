// var mysql = require('mysql');



// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "Moe",
//   password: "Hello123123",
//   database: "booker"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

const SequelizeClass = require('sequelize');
const sequelize = new SequelizeClass('booker', 'Moe','Hello123123', {dialect: 'mysql'});

module.exports = sequelize; 