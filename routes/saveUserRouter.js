"use strict"

const express = require("express");
const router = express.Router();
const userDataJSON = require("../userData.json")
const fs = require("fs");
const Util = require('../utils/util')

router.post("/", function (req, res) {
    let response = {
        data: {},
        status: "success",
        error: false
    }
    const newUser = req.body.params;
    // Check if input params valid
    const checkInput = Util.ValidateEmail(newUser.email) && Util.nameCheck(newUser.firstName) && Util.nameCheck(newUser.lastName);
    if (checkInput) {
        response.error = true;
        response.status = checkInput;
        response.data = userDataJSON.userData;
    }
    else {
        userDataJSON.userData.push(newUser);
        fs.writeFile("userData.json", JSON.stringify(userDataJSON), function (err) {
            if (err) throw err;
            console.log('Updated User Object');
        })
        response.data = userDataJSON.userData;
        response.status = "Saved Successfully."
    }
    res.json(response);
})

module.exports = router;