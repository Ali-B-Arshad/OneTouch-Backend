const { array, object } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TeamSpaceSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        ownerID: {
            name: String,
        },
        password: {
            type: String,
            required: true,
        },

        // members : [{
        //   id : mongoose.Types.ObjectId,
        //    }],
        members: {
            type: [
                {
                    // students id
                    sid: {
                        type: mongoose.Types.ObjectId,
                        ref: "users",
                    },
                },
            ],
        },

        posts: {
            type: [
                {
                    // posts id
                    pid: {
                        type: mongoose.Types.ObjectId,

                    },
                },
            ],
        },

        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = TeamSpace = mongoose.model("TeamSpace", TeamSpaceSchema);