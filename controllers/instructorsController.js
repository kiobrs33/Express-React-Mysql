const mysqlConnection = require('../db/dbConnection');

module.exports = {
	show: (req, res, next) => {
		mysqlConnection.query('SELECT * FROM instructors', (err, rows, fields) => {
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
			'SELECT * FROM instructors WHERE id_instructor = ?',
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
		var id_schedule = req.body.id_schedule;
		var first_name = req.body.first_name;
		var last_name = req.body.last_name;
		var url_image = req.body.url_image;
		var phone = req.body.phone;
		var email = req.body.email;
		var description = req.body.description;
		var query =
			'INSERT INTO instructors (id_schedule,first_name,last_name,url_image,phone,email,description) VALUES (?,?,?,?,?,?,?)';
		mysqlConnection.query(
			query,
			[
				id_schedule,
				first_name,
				last_name,
				url_image,
				phone,
				email,
				description
			],
			(err, rows, fields) => {
				if (!err) {
					res.json({ Status: 'Se guardo correctamente al Entrenador' });
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
		var query = 'UPDATE instructors SET ? WHERE id_instructor = ?';
		mysqlConnection.query(query, [updateParams, id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se actualizo correctamente al entrenador' });
				// res.json(rows);
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	},
	delete: (req, res, next) => {
		var id = req.params.id;
		var query = 'DELETE FROM instructors WHERE id_instructor = ?';
		mysqlConnection.query(query, [id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se elimino correctamente al entrenador =D ' });
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	}
};
