const router = require('express').Router();
const Users = require('./model');

router.get('/users', async (req, res, next) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
       next(error); 
    }
});

router.post('/register', async (req, res, next) => {
    try {
        console.log(req.body);
        const { name, password } = req.body;
        console.log(name, password);
        await Users.insert(name, password);
        res.status(201).json({
            message: `Success! Welcome new user, ${name}`
        });
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