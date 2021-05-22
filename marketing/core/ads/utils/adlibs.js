const config = require('config');

const UserTeamAccount = require('../../../../library/mixins/userteamaccount');

const FacebookHelper = require('../../../../library/network/facebook');

class Adlibs {

    constructor() {
        Object.assign(this, UserTeamAccount);
        this.facebookHelper = new FacebookHelper(config.get('facebook_api'));
    }

    getAdAccounts(userId,accountId, teamId) {
        return new Promise((resolve, reject) => {
            let socialAccountInfo = {};
            if (!userId) {
                reject(new Error("Invalid Inputs"));
            } else {
                return this.getSocialAccount([1, 2, 3], accountId, userId, teamId)
                    .then((socialAccountDetails) => {
                        socialAccountInfo = socialAccountDetails;
                        if(socialAccountInfo.account_type==2 || socialAccountInfo.account_type==1 ){
                            return this.facebookHelper.getAllAdAccounts(socialAccountInfo.access_token, socialAccountInfo.social_id,"", config.get('facebook_api.app_id'), config.get('facebook_api.version'));
                        }
                        else
                        {
                            console.log("Error")
                        }
                    })
                    .then((adAccounts)=>{
                        console.log(adAccounts)
                        resolve(adAccounts)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
        })
    }

    queryAdAccount(userId,accountId, teamId,act_id,endpoint) {
        return new Promise((resolve, reject) => {
            let socialAccountInfo = {};
            if (!userId) {
                reject(new Error("Invalid Inputs"));
            } else {
                return this.getSocialAccount([1, 2, 3], accountId, userId, teamId)
                    .then((socialAccountDetails) => {
                        socialAccountInfo = socialAccountDetails;
                        if(socialAccountInfo.account_type==2 || socialAccountInfo.account_type==1 ){
                            return this.facebookHelper.adAccountQuery(socialAccountInfo.access_token, act_id,endpoint);
                        }
                        else
                        {
                            console.log("Error")
                        }
                    })
                    .then((response)=>{
                        console.log(response)
                        resolve(response)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
        })
    }



}
module.exports = Adlibs;
