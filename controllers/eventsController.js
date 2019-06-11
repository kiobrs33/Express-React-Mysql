const mysqlConnection = require('../db/dbConnection');

module.exports = {
	show: (req, res, next) => {
		mysqlConnection.query('SELECT * FROM events', (err, rows, fields) => {
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
			'SELECT * FROM events WHERE id_event = ?',
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
		var name = req.body.name;
		var description = req.body.description;
		var url_image = req.body.url_image;
		var fecha_inicio = req.body.fecha_inicio;
		var fecha_fin = req.body.fecha_fin;
		var query =
			'INSERT INTO events (name,description,url_image,fecha_inicio,fecha_fin) VALUES (?,?,?,?,?,?)';
		mysqlConnection.query(
			query,
			[name, description, url_image, fecha_inicio, fecha_fin],
			(err, rows, fields) => {
				if (!err) {
					res.json({ Status: 'Se guardo correctamente el evento' });
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
		var query = 'UPDATE events SET ? WHERE id_event = ?';
		mysqlConnection.query(query, [updateParams, id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se actualizo correctamente el evento' });
				// res.json(rows);
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	},
	delete: (req, res, next) => {
		var id = req.params.id;
		var query = 'DELETE FROM events WHERE id_event = ?';
		mysqlConnection.query(query, [id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se elimino correctamente el evento =D ' });
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	}
};
