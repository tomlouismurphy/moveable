CREATE DATABASE moveable;

\c moveable;

CREATE TABLE locations(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	latitude FLOAT(8),
	longitude FLOAT(8)
);

CREATE TABLE entrys(
	id SERIAL PRIMARY KEY,
	title VARCHAR(100),
	description VARCHAR(1024),
	image VARCHAR(255),
	assignedtime TIMESTAMP,
	tags VARCHAR(255),
	reflection VARCHAR(1024),
	location_id INT REFERENCES locations(id)
);