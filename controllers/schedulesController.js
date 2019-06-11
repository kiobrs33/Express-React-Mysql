const mysqlConnection = require('../db/dbConnection');

module.exports = {
	show: (req, res, next) => {
		mysqlConnection.query('SELECT * FROM schedules', (err, rows, fields) => {
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
			'SELECT * FROM schedules WHERE id_schedule = ?',
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
		var id_class = req.body.id_class;
		var dia = req.body.dia;
		var hora_inicial = req.body.hora_inicial;
		var hora_final = req.body.hora_final;
		var fecha_inicio = req.body.fecha_inicio;
		var fecha_final = req.body.fecha_final;
		var state = req.body.state;
		var query =
			'INSERT INTO schedules (id_class,dia,hora_inicial,hora_final,fecha_inicio,fecha_final,state) VALUES (?,?,?,?,?,?,?)';
		mysqlConnection.query(
			query,
			[
				id_class,
				dia,
				hora_inicial,
				hora_final,
				fecha_inicio,
				fecha_final,
				state
			],
			(err, rows, fields) => {
				if (!err) {
					res.json({ Status: 'Se guardo correctamente el horario' });
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
		var query = 'UPDATE schedules SET ? WHERE id_schedule = ?';
		mysqlConnection.query(query, [updateParams, id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se actualizo correctamente el horario' });
				// res.json(rows);
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	},
	delete: (req, res, next) => {
		var id = req.params.id;
		var query = 'DELETE FROM schedules WHERE id_schedule = ?';
		mysqlConnection.query(query, [id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se elimino correctamente el horario =D ' });
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	}
};
