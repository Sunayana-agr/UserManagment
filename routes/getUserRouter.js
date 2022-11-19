"use strict"

const express = require("express");
const router = express.Router();
const userDataJSON = require("../userData.json")


router.get("/", function (req, res) {
    let response = {
        data: userDataJSON.userData,
        status: "success",
        error: null
    }
    res.json(response);
})

module.exports = router;