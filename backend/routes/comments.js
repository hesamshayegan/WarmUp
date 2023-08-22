"use strict";

const express = require("express");
const jsonschema = require("jsonschema");

const Comment = require("../models/comment");
const { ensureCorrectUser } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const commentSchema = require("../schemas/comment.json");


const router = express.Router();



// register a comment
router.post("/:username/:category/", ensureCorrectUser, async function (req, res, next) {
    try {

        const validator = jsonschema.validate(req.body, commentSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const { username, category } = req.params
        const { content } = req.body
        const score = await Comment.registerComment({ username, category },
                                                    { content });
        return res.json({ score })

    } catch(err) {
        next(err)
    }
});


// edit a comment
router.patch("/:username/:category/edit", ensureCorrectUser, async function (req, res, next) {
    try {

        const validator = jsonschema.validate(req.body, commentSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const { username, category } = req.params
        const { content } = req.body
        const score = await Comment.editComment({ username, category },
                                                    { content });
        return res.json({ score })

    } catch(err) {
        next(err)
    }
});


// remove a comment
router.delete("/:username/:category/delete", ensureCorrectUser, async function (req, res, next) {

    try {
        const { username, category } = req.params
        await Comment.removeComment({ username, category});

        return res.json({ deleted: `username:${req.params.username}, category:${req.params.category} comment` });
        
    } catch(err) {
        return next(err)
    }

})




module.exports = router

