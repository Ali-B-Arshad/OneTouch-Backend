const { Container } = require("typedi")

const dotenv = require("dotenv");
dotenv.config();


let logger = require("winston").loggers.get("UserController.js")


//Creating user in local API
exports.createTeamspaceController = async (req, res) => {
    let roomObj = {
        ...req.body
    }

    try {
        const TeamSpaceService = Container.get("TeamSpaceService")
        let teamspace = await TeamSpaceService.Register(roomObj)

        if (res) {
            return res.status(200).json({ teamspace: teamspace })

        }

        else {
            return res.status(201).json({ TeamSpace: null });
        }


    } catch (e) {
        logger.error('🔥 error: ' + e);
        //return next(e);
        return res.status(400).json({
            error: "Teamspace creation failed",
        });
    }
}

exports.joinTeamSpaceController = async (req, res) => {
    const userId = req.body.userId
    const TeamSpaceId = req.body.TeamSpaceId

    const TeamSpacePassword = req.body.password
    console.log(TeamSpaceId);

    try {
        const TeamSpaceService = Container.get("TeamSpaceService")
        const response = await TeamSpaceService.Join(TeamSpaceId, userId, TeamSpacePassword)
        return res.status(201).json({ TeamSpace: response })
    } catch (e) {
        logger.error('🔥 error: ' + e);
        //return next(e);
        return res.status(400).json({
            error: "Could not join the group",
        });
    }
}