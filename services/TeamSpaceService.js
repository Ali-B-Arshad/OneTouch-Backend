const { Container } = require("typedi");
const dotenv = require("dotenv");
dotenv.config();

module.exports = class TeamSpaceService {
    TeamSpaceModel;

    constructor() {
        this.TeamSpaceModel = Container.get("TeamSpaceModel");

        this.userModel = Container.get("userModel");
        // this.postModel = Container.get("postModel");


    }


    // async Post(TeamSpaceObj) {
    //     const newpost = new this.postModel(TeamSpaceObj);
    //     const res = await this.postModel.create(newpost);
    //     return res;
    // }


    async Register(TeamSpaceObj) {
        const newTeamSpace = new this.TeamSpaceModel(TeamSpaceObj);
        const res = await this.TeamSpaceModel.create(newTeamSpace);

        return res;
    }

    async Join(TeamSpaceId, userId, password) {
        console.log(TeamSpaceId);
        let TeamSpace = await this.TeamSpaceModel.findById(TeamSpaceId);
        console.log(TeamSpace);
        if (!TeamSpace) {
            throw new Error("TeamSpace does not exist");
        } else {
            if (password == TeamSpace.password) {
                let res = await this.TeamSpaceModel.findOneAndUpdate(
                    { _id: TeamSpaceId },
                    { $push: { members: userId } }, { new: true }
                );

                let res2 = await this.userModel.findOneAndUpdate(
                    { _id: userId },
                    { $push: { TeamSpacesJoined: TeamSpaceId } }, { new: true }
                );


                console.log(res2);



                console.log("response" + res);
                //  { _id: 1 },
                //  { $push: { scores: 89 } }

                console.log(userId);
                console.log(TeamSpace.name);
                return TeamSpace.name;



            } else {
                throw new Error("Password for group mismatch");
            }
        }
    }
};