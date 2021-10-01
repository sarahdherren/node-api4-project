const router = require('express').Router();
const Users = require('./model');

router.get('/users', async (req, res, next) => {
    try {
        const users = await Users.getUsers();
        res.status(200).json(users);
    } catch (error) {
       next(error); 
    }
});

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
});

module.exports = router;