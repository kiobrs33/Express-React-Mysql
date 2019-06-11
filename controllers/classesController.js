const mysqlConnection = require('../db/dbConnection');

module.exports = {
	show: (req, res, next) => {
		mysqlConnection.query('SELECT * FROM classes', (err, rows, fields) => {
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
			'SELECT * FROM classes WHERE id_class = ?',
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
		var id_event = req.body.id_event;
		var name = req.body.name;
		var description = req.body.description;
		var url_image = req.body.url_image;
		var fecha_inicio = req.body.fecha_inicio;
		var fecha_fin = req.body.fecha_fin;
		var query =
			'INSERT INTO classes (id_event,name,description,url_image,fecha_inicio,fecha_fin) VALUES (?,?,?,?,?,?)';
		mysqlConnection.query(
			query,
			[id_event, name, description, url_image, fecha_inicio, fecha_fin],
			(err, rows, fields) => {
				if (!err) {
					res.json({ Status: 'Se guardo correctamente la clase' });
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
		var query = 'UPDATE classes SET ? WHERE id_class = ?';
		mysqlConnection.query(query, [updateParams, id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se actualizo correctamente la clase' });
				// res.json(rows);
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	},
	delete: (req, res, next) => {
		var id = req.params.id;
		var query = 'DELETE FROM classes WHERE id_class = ?';
		mysqlConnection.query(query, [id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se elimino correctamente la clase =D ' });
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	}
};
