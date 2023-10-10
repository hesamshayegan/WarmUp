"use strict";

const express = require("express");
const jsonschema = require("jsonschema");

const Comment = require("../models/comment");
const { ensureCorrectUser } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const commentSchema = require("../schemas/comment.json");


const router = express.Router();



// register a comment
router.post("/:username/write", ensureCorrectUser, async function (req, res, next) {
    try {

        const validator = jsonschema.validate(req.body, commentSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }
        
        const { username } = req.params
        const { category, content } = req.body
        const comment = await Comment.registerComment({ username },
                                                    { category, content });

        return res.json({ comment })

    } catch(err) {
        next(err)
    }
});


// edit a comment
router.patch("/:username/edit", ensureCorrectUser, async function (req, res, next) {
    try {

        const validator = jsonschema.validate(req.body, commentSchema);
        if (!validator.valid) {
            const errs = validator.errors.map(e => e.stack);
            throw new BadRequestError(errs);
        }

        const { username } = req.params
        const { category, content } = req.body
        const comment = await Comment.editComment({ username },
                                                    { category, content });
        return res.json({ comment })

    } catch(err) {
        next(err)
    }
});


// remove a comment
router.delete("/:username/delete", ensureCorrectUser, async function (req, res, next) {

    try {
        const { username } = req.params
        const { category } = req.body
        await Comment.removeComment({ username }, category);

        return res.json({ deleted: `username:${req.params.username}, category:${category} comment` });
        
    } catch(err) {
        return next(err)
    }

})


// get a comment
router.get("/:username/content", ensureCorrectUser, async function (req, res, next) {

    try {
        const { username } = req.params
        
        const comments = await Comment.getComment(username);

        return res.json({ comments })
        
    } catch(err) {
        return next(err)
    }

})


module.exports = router

