const mysqlConnection = require('../db/dbConnection');

module.exports = {
	show: (req, res, next) => {
		mysqlConnection.query('SELECT * FROM businesses', (err, rows, fields) => {
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
			'SELECT * FROM businesses WHERE id_business = ?',
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
		var ruc = req.body.ruc;
		var adress = req.body.adress;
		var url_logo = req.body.url_logo;
		var phone = req.body.phone;
		var query =
			'INSERT INTO businesses (name,ruc,adress,url_logo,phone) VALUES (?,?,?,?,?)';

		mysqlConnection.query(
			query,
			[name, ruc, adress, url_logo, phone],
			(err, rows, fields) => {
				if (!err) {
					res.status(200).json({
						data: {
							message: 'Se guardo exitosamente'
						}
					});
					// res.json({ Status: 'Se guardo correctamente el dato' });
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
		var query = 'UPDATE businesses SET ? WHERE id_business = ?';
		mysqlConnection.query(query, [updateParams, id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se actualizo correctamente el dato' });
				// res.json(rows);
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	},
	delete: (req, res, next) => {
		var id = req.params.id;
		var query = 'DELETE FROM businesses WHERE id_business = ?';
		mysqlConnection.query(query, [id], (err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Se elimino correctamente el dato =D ' });
			} else {
				console.log('SE GENERO ERROR -> ' + err);
			}
		});
	}
};
