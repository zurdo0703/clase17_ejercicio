"use strict";

var crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
    let Carrito = sequelize.define('Carrito', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        product: {
            type: DataTypes.STRING,
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
            // don't add the timestamp attributes (updatedAt, createdAt)
            timestamps: true,

            // don't use camelcase for automatically added attributes but underscore style
            // so updatedAt will be updated_at
            underscored: true,

            // disable the modification of table names; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: false,

            // define the table's name
            tableName: 'carrito',

            // Enable optimistic locking.  When enabled, sequelize will add a version count attribute
            // to the model and throw an OptimisticLockingError error when stale instances are saved.
            // Set to true or a string with the attribute name you want to use to enable.
            version: false
        });

    Carrito.associate = models => {
        // asociar los roles
        Carrito.belongsToMany(models.Product, {
        	through: 'product_carrito',
            foreignKey: 'carrito'
        });
        Carrito.belongsTo(models.User, {
        	foreignKey: 'user'
        });
    };

    
    return Carrito;
};