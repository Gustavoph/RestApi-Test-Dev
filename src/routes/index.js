const { Router } = require("express");
const router = Router();

const { getUsers } = require("../services/Users/getUsers");
const { postUser } = require("../services/Users/postUser");
const { putUser } = require("../services/Users/putUser");

router.get("/", getUsers);

router.post("/", postUsers);

router.put("/", putUser);

module.exports = { router };
