var Sequelize = require('sequelize');
 
module.exports = function (sequelize) {
    var Sport = sequelize.define("Sport", {
        sport_type: Sequelize.STRING,
        sport_name: Sequelize.STRING
    });
    return {
        Sport: Sport
    };
};