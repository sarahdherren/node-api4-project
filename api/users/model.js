const db = require('../../data/users');

const find = () => {
    return db;
};

const insert = ({ name, password }) => {
    const newUser = { name, password };
    db.push(newUser);
};

module.exports = {
    find,
    insert
};

