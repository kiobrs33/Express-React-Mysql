const mysqlConnection = require('../db/dbConnection');

module.exports = {
	show: (req, res, next) => {
		mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
			if (!err) {
				res.json(rows);
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	},
	showOne: (req, res, next) => {
		var id = req.params.id;
		mysqlConnection.query(
			'SELECT * FROM users WHERE id_user = ?',
			[id],
			(err, rows, fields) => {
				if (!err) {
					res.json(rows[0]);
				} else {
					console.log('SE GENERO ERROR -> ' + err);
				}
			}
		);
	},
	create: (req, res, next) => {
		var id_business = req.body.id_business;
		var first_name = req.body.first_name;
		var last_name = req.body.last_name;
		var phone = req.body.phone;
		var type = req.body.type;
		var email = req.body.email;
		var password = req.body.password;
		var query =
			'INSERT INTO users (id_business,first_name,last_name,phone,type,email,password) VALUES (?,?,?,?,?,?,?)';
		mysqlConnection.query(
			query,
			[id_business, first_name, last_name, phone, type, email, password],
			(err, rows, fields) => {
				if (!err) {
					res.json({ Status: 'Se guardo correctamente al usuario' });
				} else {
					console.log('SE GENERO ERROR -> ' + err);
				}
			}
		);
	},
	update: (req, res, next) => {
		var id = req.params.id;
		let updateParams = {
			...req.body
		};
		var query = 'UPDATE users SET ? WHERE id_user = ?';
		mysqlConnection.query(query, [updateParams, id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se actualizo correctamente al usuario' });
				// res.json(rows);
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	},
	delete: (req, res, next) => {
		var id = req.params.id;
		var query = 'DELETE FROM users WHERE id_user = ?';
		mysqlConnection.query(query, [id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se elimino correctamente al usuario =D ' });
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	}
};
