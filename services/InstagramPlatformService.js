const { Container } = require("typedi")
const bcrypt = require("bcrypt")
const FileCookieStore = require('tough-cookie-filestore2')
const Instagram = require('instagram-web-api')
// Create Client
// Fetch 
// Controller will simple decode user's data and create an object

class InstagramPlatformService {
    socialPlatformsModel
    constructor() {
        this.socialPlatformsModel = Container.get("social_platforms")
    }
    //get instagram media

    async getInstBasicMedia(userId) {
        let doc = await this.socialPlatformsModel.findOne({ user_id: userId })
        if (doc) {
            //store login user in json file for future user
            const cookiesFile = `./${userId}.json`;
            const cookieStore = new FileCookieStore(cookiesFile)
            // URL or path of photo
            const client = new Instagram({ username: doc.instagram.basic_instagram.email, password: doc.instagram.basic_instagram.password, cookieStore: cookieStore })

            await client.login();
            let media = await client.getPhotosByUsername({ username: doc.instagram.basic_instagram.email });
            console.log(media.user.edge_owner_to_timeline_media.edges);
            return media;
        } else {
            return null
        }
    }
}


module.exports = InstagramPlatformService