const db = require('../../data/users');

const getUsers = () => {
    return db;
};

module.exports = {
    getUsers,
};

