"use strict";

const express = require("express");
const jsonschema = require("jsonschema");

const Score = require("../models/score");

const router = express.Router();





router.post("/:username/:category", async function (req, res, next) {
    try {
        
        const { username, category } = req.params
        // debugger;
        const score = await Score.record({ username, category });
        return res.json({ score })

    } catch(err) {
        next(err)
    }
})

module.exports = router