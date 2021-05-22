const boardLibs = require('../utils/boardLibs');
const config = require('config');

class BoardController {

    create(req, res) {
        return boardLibs.create(req.body.userScopeId, req.query.teamId, req.query.boardName, req.query.keyword)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getAllBoards(req, res) {
        return boardLibs.getAllBoards(req.body.userScopeId, req.query.teamId)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    update(req, res) {
        return boardLibs.update(req.body.userScopeId, req.query.teamId, req.query.keyword, req.query.boardId)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: "Updated successfully!" });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    delete(req, res) {
        return boardLibs.delete(req.body.userScopeId, req.query.teamId, req.query.boardId)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: "Board has been deleted successfully" });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
}


module.exports = new BoardController();