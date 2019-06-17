CREATE DATABASE IF NOT EXISTS gym;

USE gym;

CREATE TABLE businesses(
	id_business INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    ruc VARCHAR(45) DEFAULT NULL,
    adress VARCHAR(45) DEFAULT NULL,
    url_logo VARCHAR(45) DEFAULT NULL,
    phone VARCHAR(9) DEFAULT NULL,
    PRIMARY KEY(id_business) 
);

CREATE TABLE users(
	id_user INT(11) NOT NULL AUTO_INCREMENT,
    id_business INT(11) NOT NULL,
    first_name VARCHAR(45) DEFAULT NULL,
    last_name VARCHAR(45) DEFAULT NULL,
    phone VARCHAR(9) DEFAULT NULL,
    type VARCHAR(30) DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    password VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id_user), 
    FOREIGN KEY(id_business) REFERENCES businesses(id_business)
);

CREATE TABLE frepasses(
	id_frepass INT(11) NOT NULL AUTO_INCREMENT,
    fecha_expi VARCHAR(45) DEFAULT NULL,
    dni VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY(id_frepass) 
);

CREATE TABLE visitors(
    id_visitor INT(11) NOT NULL AUTO_INCREMENT,
	id_frepass INT(11) NOT NULL,
    first_name VARCHAR(45) DEFAULT NULL,
    last_name VARCHAR(45) DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    phone VARCHAR(9) DEFAULT NULL,
    sexo VARCHAR(10) DEFAULT NULL,
    code VARCHAR(20) DEFAULT NULL,
    PRIMARY KEY(id_visitor),
    FOREIGN KEY(id_frepass) REFERENCES frepasses(id_frepass)
);

CREATE TABLE events(
	id_event INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    description VARCHAR(100) DEFAULT NULL,
    url_image VARCHAR(45) DEFAULT NULL,
    fecha_inicio VARCHAR(20) DEFAULT NULL,
    fecha_fin VARCHAR(20) DEFAULT NULL,
    PRIMARY KEY(id_event) 
);

CREATE TABLE classes(
    id_class INT(11) NOT NULL AUTO_INCREMENT,
	id_event INT(11) NOT NULL,
    name VARCHAR(45) DEFAULT NULL,
    description VARCHAR(100) DEFAULT NULL,
    url_image VARCHAR(45) DEFAULT NULL,
    fecha_inicio VARCHAR(20) DEFAULT NULL,
    fecha_fin VARCHAR(20) DEFAULT NULL,
    PRIMARY KEY(id_class), 
    FOREIGN KEY(id_event) REFERENCES events(id_event)
);

CREATE TABLE schedules(
    id_schedule INT(11) NOT NULL AUTO_INCREMENT,
	id_class INT(11) NOT NULL,
    dia VARCHAR(45) DEFAULT NULL,
    hora_inicial VARCHAR(20) DEFAULT NULL,
    hora_final VARCHAR(20) DEFAULT NULL,
    fecha_inicio VARCHAR(20) DEFAULT NULL,
    fecha_final VARCHAR(20) DEFAULT NULL,
    state VARCHAR(15),
    PRIMARY KEY(id_schedule),
    FOREIGN KEY(id_class) REFERENCES classes(id_class)
);

CREATE TABLE instructors(
    id_instructor INT(11) NOT NULL AUTO_INCREMENT,
	id_schedule INT(11) NOT NULL,
    first_name VARCHAR(45) DEFAULT NULL,
    last_name VARCHAR(45) DEFAULT NULL,
    url_image VARCHAR(45) DEFAULT NULL,
    phone VARCHAR(9) DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    description VARCHAR(200) DEFAULT NULL,
    PRIMARY KEY(id_instructor),
    FOREIGN KEY(id_schedule) REFERENCES schedules(id_schedule)
);

INSERT INTO businesses VALUES 
(1,"Negocio01","432432423423","av.numero01","logo01","123456899"),
(2,"Negocio02","432432423423","av.numero02","logo02","123456899"),
(3,"Negocio03","432432423423","av.numero03","logo03","123456899"),
(4,"Negocio04","432432423423","av.numero04","logo04","123456899"),
(5,"Negocio05","432432423423","av.numero05","logo05","123456899");

INSERT INTO users VALUES 
(1,5,"nombre01","apellidos01","234234234","admin","user01@gmail.com","12345678"),
(2,4,"nombre02","apellidos02","234234234","admin","user02@gmail.com","12345678"),
(3,3,"nombre03","apellidos03","234234234","admin","user03@gmail.com","12345678"),
(4,2,"nombre04","apellidos04","234234234","admin","user04@gmail.com","12345678"),
(5,1,"nombre05","apellidos05","234234234","admin","user05@gmail.com","12345678");

INSERT INTO frepasses VALUES
(1,"2019-01-02","432432423"),
(2,"2019-02-02","432432423"),
(3,"2019-03-02","432432423"),
(4,"2019-04-02","432432423"),
(5,"2019-05-02","432432423");

INSERT INTO visitors VALUES
(1,5,"visitante01","apellidos01","visitante01@gmail.com","982138112","M","7373833"),
(2,4,"visitante02","apellidos02","visitante02@gmail.com","982138112","M","7373833"),
(3,3,"visitante03","apellidos03","visitante03@gmail.com","982138112","M","7373833"),
(4,2,"visitante04","apellidos04","visitante04@gmail.com","982138112","M","7373833"),
(5,1,"visitante05","apellidos05","visitante05@gmail.com","982138112","M","7373833");

INSERT INTO visitors  (first_name,last_name,email,phone,sexo,code) 
VALUES (5,"visitante0111","apellidos0111","visitante0111@gmail.com","982138112","M","7373833");

INSERT INTO events VALUES
(1,"baile01","danzas diversas","imagen01","2019-01-01","2019-02-01"),
(2,"baile02","danzas diversas","imagen01","2019-01-01","2019-02-01"),
(3,"baile03","danzas diversas","imagen01","2019-01-01","2019-02-01"),
(4,"baile04","danzas diversas","imagen01","2019-01-01","2019-02-01"),
(5,"baile05","danzas diversas","imagen01","2019-01-01","2019-02-01");

INSERT INTO classes VALUES
(1,5,"Abdominales01","blablalbla","image01","2019-01-01","2019-02-01"),
(2,4,"Abdominales02","blablalbla","image02","2019-01-01","2019-02-01"),
(3,3,"Abdominales03","blablalbla","image03","2019-01-01","2019-02-01"),
(4,2,"Abdominales04","blablalbla","image04","2019-01-01","2019-02-01"),
(5,1,"Abdominales05","blablalbla","image05","2019-01-01","2019-02-01");

INSERT INTO schedules VALUES
(1,5,"lunes","7:00","13:00","2019-01-01","2019-02-01","activo"),
(2,4,"martes","7:00","13:00","2019-01-01","2019-02-01","activo"),
(3,3,"miercoles","7:00","13:00","2019-01-01","2019-02-01","activo"),
(4,2,"jueves","7:00","13:00","2019-01-01","2019-02-01","activo"),
(5,1,"viernes","7:00","13:00","2019-01-01","2019-02-01","activo");

INSERT INTO instructors VALUES
(1,5,"entrenador01","apellidos01","image01","82373267","entrenador01@gmail.com","es persistente"),
(2,4,"entrenador02","apellidos02","image02","82373267","entrenador02@gmail.com","es persistente"),
(3,3,"entrenador03","apellidos03","image03","82373267","entrenador03@gmail.com","es persistente"),
(4,2,"entrenador04","apellidos04","image04","82373267","entrenador04@gmail.com","es persistente"),
(5,1,"entrenador05","apellidos05","image05","82373267","entrenador05@gmail.com","es persistente");

