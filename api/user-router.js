const router = require("express").Router();

// need this import just waiting until finalizing auth or users model
// const User = require("../models/users");

router.get("/all", (req, res) => {
    User.all()
        .then(users => {
            response.json(users);
        })
        .catch(err => response.send(err));
});

module.exports = router;
