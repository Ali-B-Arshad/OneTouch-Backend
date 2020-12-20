const logger = require("winston").loggers
const UserService = require("../services/UserService")
const SocialPlatformService = require("../services/SocialPlatformsService")
const InstagramPlatformService = require("../services/InstagramPlatformService");

const { Container } = require('typedi')

module.exports = (data) => {
    data.models.forEach(m => {
        Container.set(m.name, m.model);
    });
    //add other dependency that are needed

    Container.set("UserService", new UserService())
    Container.set("SocialPlatformService", new SocialPlatformService())
    Container.set("InstagramPlatformService", new InstagramPlatformService())
    Container.set("logger", logger)
}