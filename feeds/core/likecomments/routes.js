var routes = require('express').Router();
const likeController = require('./controllers/likecommentcontrollers');

routes.post('/fblike', likeController.facebookLike);
routes.post('/fbcomment', likeController.facebookComment);
routes.post('/twtlike', likeController.twitterLike);
routes.post('/twtdislike', likeController.twitterDislike);
routes.post('/twtcomment', likeController.twitterComment);
routes.delete('/twtcomment', likeController.twitterDeleteComment);
routes.post('/ytlike', likeController.youtubeLike);
routes.post('/ytcomment', likeController.youtubeComment);
routes.post('/ytreplycomment', likeController.youtubeReplyComment);
routes.get('/instabusinesscomment', likeController.instabusinesscomment);
// routes.post('/instabusinesscommentreply', likeController.instabusinesscommentreply);

module.exports = routes;