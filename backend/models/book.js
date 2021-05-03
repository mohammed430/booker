const SequelizeClass = require('sequelize');
const sequelize = require('./../config');


const book = sequelize.define('book', {
    id: {
        type: SequelizeClass.INTEGER,
        autoIncrement: true,
        allowNull:false ,
        primaryKey: true
    },    
    image: {
        type: SequelizeClass.STRING,
        allowNull:false
    } ,
    contact_name: {
        type: SequelizeClass.STRING,
        allowNull: false,
    },     
    phone: {
        type: SequelizeClass.STRING,
        allowNull:false,
    },     
    email: {
        type: SequelizeClass.STRING,
        allowNull:false,
    },     
    abstract: {
        type: SequelizeClass.STRING,
        allowNull:false,
    },     
    author: {
        type: SequelizeClass.STRING,
        allowNull:false,
    },     
    title: {
        type: SequelizeClass.STRING,
        allowNull:false,
    },     
    published_date: {
        type: SequelizeClass.DATE,
        allowNull:false,
     },  
    borrowedBy: {
        type: SequelizeClass.STRING,
        allowNull:true,
    },  
    category: {
        type: SequelizeClass.ENUM ('action', 'horror', 'drama', 'romance', 'fiction'),
        allowNull:false,
    },  
    status: {
        type: SequelizeClass.ENUM ('available', 'unavailable'),
        allowNull:true,
    },  
}, {timestamps:false});

module.exports = book;
