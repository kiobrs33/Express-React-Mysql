const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Content-Type, Authorization, Content-Length, X-Requested-With'
	);
	next();
});

app.options('/*', function(req, res, next) {
	res.sendStatus(200);
});

//Rutas para la conexion a la base de datos
const router = express.Router();

//Todas las rutas tendran el prefijo API
app.use('/api', router);

//Invocando las rutas para Businesses(Negocios)
const businessesRouter = require('./routes/Businesses');
router.use('/business', businessesRouter);

//Invocando las rutas para Users(Usuarios)
const usersRouter = require('./routes/Users');
router.use('/user', usersRouter);

//Invocando las rutas para Classes(Clases)
const classesRouter = require('./routes/Classes');
router.use('/class', classesRouter);

//Invocando las rutas para Events(eventos)
const eventsRouter = require('./routes/Events');
router.use('/event', eventsRouter);

//Invocando las rutas para Frepass(Pases Libres)
const frepassRouter = require('./routes/Frepasses');
router.use('/frepass', frepassRouter);

//Invocando las rutas para Instructors(Entrenadores)
const instructorRouter = require('./routes/Instructors');
router.use('/instructor', instructorRouter);

//Invocando las rutas para Schedules(Horarios)
const scheduleRouter = require('./routes/Schedules');
router.use('/schedule', scheduleRouter);

//Invocando las rutas para Visitors(visitantes)
const visitorRouter = require('./routes/Visitors');
router.use('/visitor', visitorRouter);

router.get('/', function(req, res) {
	res.json({ message: 'Bienvenido a nuestra API de magafuxion' });
});

//Estableciendo el puerto e iniciando el servidor
const port = process.env.PORT || 5000;
app.listen(port);
console.log('Iniciando servicio en el puerto : ' + port);
