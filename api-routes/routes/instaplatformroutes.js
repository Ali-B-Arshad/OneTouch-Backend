const express = require("express");
// const passport = require('passport')
const router = new express.Router();
const { getWithAuth, postWithAuth } = require("../middlewares")

const { getInstagramBasicMedia, delInstagramBasicMedia } = require("../../controllers/auth/instaplatform")

module.exports = (app) => {
    app.use("/social/", router)
    router.post("/instagram/basic/media", getWithAuth, getInstagramBasicMedia)
    router.post("/instagram/basic/media/delete", getWithAuth, delInstagramBasicMedia)

}