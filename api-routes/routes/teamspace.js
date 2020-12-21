const { celebrate, Joi } = require("celebrate");

const express = require("express");
// const {refreshFirebaseToken} = require("../../controllers/auth/users");
const { getWithAuth } = require("../middlewares");

const router = new express.Router();

// const {registerClassroomController} = require("../../controllers/classroom/registerClassroomController");
const {
    createTeamspaceController,
    // showTeamspaceController,
    joinTeamSpaceController
} = require("../../controllers/teamspace");

module.exports = (app) => {
    app.use("/teamspace", router);

    router.post(
        "/create",
        celebrate({
            body: Joi.object({
                name: Joi.string().required(),
                password: Joi.string().required(),
            }),
        }),
        createTeamspaceController
    );

    // router.post(
    //     "/display",
    //     celebrate({
    //         body: Joi.object({
    //             name: Joi.string().required(),
    //             password: Joi.string().required(),
    //         }),
    //     }),
    //     createTeamspaceController
    // );

    router.post(
        "/join",
        celebrate({
            body: Joi.object({
                userId: Joi.string().required(),
                teamspaceid: Joi.string().required(),
                password: Joi.string().required(),
            }),
        }),
        joinTeamSpaceController
    );

};