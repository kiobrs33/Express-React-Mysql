const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'gym'
});

mysqlConnection.connect(function(error) {
	if (error) {
		console.log(error);
		return;
	} else {
		console.log('DataBase is Connected :D');
	}
});

module.exports = mysqlConnection;
