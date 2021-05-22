const AdLibs = require('../utils/adlibs');
const adLibs = new AdLibs();
const logger = require('../../../utils/logger');

class AdsController {
    getAdAccount(req, res) {
        return adLibs.getAdAccounts(req.body.userScopeId,req.query.accountId, req.query.teamId)
            .then(function (result) {
                console.log("result", result)
                res.status(200).json({ code: 200, status: 'success', result: result });
            })
            .catch(function (error) {
                res.status(200).json({ code: 404, status: "failed", error: error.message });
            });
    }

    queryAdAccount(req, res) {
        return adLibs.queryAdAccount(req.body.userScopeId,req.query.accountId, req.query.teamId,req.query.act_id,req.query.endpoint)
            .then(function (result) {
                console.log("result", result)
                res.status(200).json({ code: 200, status: 'success', result: result });
            })
            .catch(function (error) {
                res.status(200).json({ code: 404, status: "failed", error: error.message });
            });
    }

}



module.exports = new AdsController();