const UploadLibs = require('../utils/uploadlibs');


const config = require('config');

class FileUploadController {

    uploadResponses(req, res, next) {
        res.status(200).send(req.files);
    }

    uploadMedia(req, res) {
        var uploadlibs = new UploadLibs();
        return uploadlibs.uploadMedia(req.query.userScopeId, req.query.teamId, req.query.privacy, req.files, req.query.title)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", mediaDetails: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getUserMediaDetails(req, res) {
        var uploadlibs = new UploadLibs();
        return uploadlibs.getUserMediaDetails(req.body.userScopeId, req.query.teamId, req.query.privacy, req.query.pageId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", totalSpace: response.totalSize, usedSpace: response.usedSize, data: response.data });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    deleteUserMedia(req, res) {
        var uploadlibs = new UploadLibs();
        return uploadlibs.deleteUserMedia(req.query.isForceDelete, req.body.userScopeId, req.query.mediaId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
}

module.exports = new FileUploadController();

