const AuthController = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/login", AuthController.login);

router.post("/register", AuthController.register);

router.post("/refresh", AuthController.refreshToken);


module.exports = router;