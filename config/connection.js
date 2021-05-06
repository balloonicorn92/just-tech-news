// import the Sequelize constructor from library
const Sequelize = require('sequelize');
//create connection to our db
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Mysqlpass', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;