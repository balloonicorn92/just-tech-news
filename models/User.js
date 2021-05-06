const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create User model
class User extends Model {}

// definte table columns and configuration
User.init( //init initialized the model data
    { 
      id: { //definite id column
        type: DataTypes.INTEGER, //use datatype objects to provide which data type we are using
        allowNull: false, //NOT NULL
        primaryKey: true, //sets it as primary key
        autoIncrement: true // auto increment
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // there cannot be any duplicate email values in this table
        unique: true,
        // if allowNull is set to false, we can run our data through validators before creating the table data
        validate: {
          isEmail: true
        }
      },
      // define a password column
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // this means the password must be at least four characters long
          len: [4]
        }
      }
    },
    {
        //TABLE CONFIGURATION OPTIONS GO HERE

        //pass in imported sequelize connection 
        sequelize,
        timestamps: false, //dont automatically create createdAt/ updatedAt fields
        freezeTableName: true, //dont pluralize name of database table
        underscored: true, //use underscores instead of camel casing
        modelName: 'user' //make it so model name stays lowercase in database
    }
);


module.exports = User;