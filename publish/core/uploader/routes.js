const routes = require("express").Router();
const config = require('config');
const fileUploaderController = require('./controllers/fileUploaderController');
const UploadServices = require('../../../library/utility/uploadServices');
const uploadServices = new UploadServices(config.get('uploadService'));


routes.post('/media', uploadServices.mediaUpload.array('media', 5), fileUploaderController.uploadMedia);
routes.get('/getMediaDetails', fileUploaderController.getUserMediaDetails);
routes.delete('/deleteMedia', fileUploaderController.deleteUserMedia);


module.exports = routes;