const { Container } = require("typedi")
let logger = require("winston").loggers.get("InstagramMediaPlatform.js")

exports.getInstagramBasicMedia = async (req, res) => {
    try {
        const socialPlatformService = Container.get("InstagramPlatformService")
        console.log("Here");
        const response = await socialPlatformService.getInstBasicMedia(req.userId)
        res.status(200).json({ data: response })
    } catch (error) {
        logger.error('🔥 error: ' + error);
        //return next(e);
        return res.status(200).json({
            error: "Failed to get all instagram media",
        });
    }
}

exports.delInstagramBasicMedia = async (req, res) => {
    try {
        const socialPlatformService = Container.get("InstagramPlatformService")
        console.log("Here");
        const response = await socialPlatformService.delInstBasicMedia(req.userId, req.mediaId)
        res.status(200).json({ data: response })
    } catch (error) {
        logger.error('🔥 error: ' + error);
        //return next(e);
        return res.status(200).json({
            error: "Failed to delete instagram media",
        });
    }
}