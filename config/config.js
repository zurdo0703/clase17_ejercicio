let config = {};

config.application = {};
config.application.host = 'localhost';
config.application.maxItemsPerPage = 100;

config.database = {};
config.database.dialect = "mysql";
config.database.username = "root";
config.database.password = "CwqSoIu9pZMorHuZ";
config.database.port = "3306";
config.database.host = "phenixbytes.com";
config.database.database = "cafeamordipisa";
config.database.operatorsAliases = false;

config.database.pool = {};
config.database.pool.max = 5;
config.database.pool.min = 0;
config.database.pool.acquire = 30000;
config.database.pool.idle = 10000;

config.sequelize = {};
config.sequelize.sync = {};
config.sequelize.sync.force = true;
config.sequelize.sync.logging = null;

module.exports = config;