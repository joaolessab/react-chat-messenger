const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is up and it is running');
});

module.exports = router;