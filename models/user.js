console.log("models/user.js file starting")

// const { QueryInterface, DataTypes } = require("sequelize");

// const {  DataTypes } = require('sequelize');
// const queryInterface = sequelize.getQueryInterface();

// const queryInterface = sequelize.getQueryInterface();



// QueryInterface.addColumn('Users', 'streakCount', {type: DataTypes.INTEGER})




module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }, 

      streakcount:{
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
     
    });
    console.log("models/user.js file ending")
    return User;
  };