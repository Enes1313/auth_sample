NodeJS, PostgreSQL kurulu olmasi gerekmektedir.

PostgreSQL de :
	1- user tanimlayin. (enes diye tanimladim)
	2- SQL komutu �alistirin.

	CREATE DATABASE users
		WITH 
		OWNER = KUL_ADI
		ENCODING = 'UTF8'
		LC_COLLATE = 'Turkish_Turkey.1254'
		LC_CTYPE = 'Turkish_Turkey.1254'
		TABLESPACE = pg_default
		CONNECTION LIMIT = -1;
		
	3- PostgreSQL ayarlari i�in models/user.js i�inde asagidaki satir degistirilmelidir.

	var sequelize = new Sequelize('postgres://KUL_ADI:KUL_PASS@localhost:5432/users');

Yapilmasi Gerekenler:
	npm install --global --production windows-build-tools
	npm intalll
Yapmaniza Gerek Yok : 
	npm install --save bcrypt body-parser cookie-parser express express-session pg sequelize ejs express-ejs-layouts