const mysqlConnection = require('../db/dbConnection');

module.exports = {
	show: (req, res, next) => {
		mysqlConnection.query('SELECT * FROM visitors', (err, rows, fields) => {
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
			'SELECT * FROM visitors WHERE id_visitor = ?',
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
		var id_frepass = req.body.id_frepass;
		var first_name = req.body.first_name;
		var last_name = req.body.last_name;
		var email = req.body.email;
		var phone = req.body.phone;
		var sexo = req.body.phone;
		var code = req.body.code;
		var query =
			'INSERT INTO visitors (id_visitor,first_name,last_name,email,phone,sexo,code) VALUES (?,?,?,?,?,?,?)';
		mysqlConnection.query(
			query,
			[id_frepass, first_name, last_name, email, phone, sexo, code],
			(err, rows, fields) => {
				if (!err) {
					res.json({ Status: 'Se guardo correctamente el visitante' });
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
		var query = 'UPDATE visitors SET ? WHERE id_visitor = ?';
		mysqlConnection.query(query, [updateParams, id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se actualizo correctamente al visitante' });
				// res.json(rows);
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	},
	delete: (req, res, next) => {
		var id = req.params.id;
		var query = 'DELETE FROM visitors WHERE id_visitor = ?';
		mysqlConnection.query(query, [id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se elimino correctamente eal visitante =D ' });
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	}
};
