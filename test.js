const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

async function testInsnta() {
    const id = "5f82fd43e0ca1417f0e4ff8d"
    const cookiesFile = `../schedulerserver/sessions/instagram/${id}.json`;
    const cookieStore = new FileCookieStore(cookiesFile)
    // URL or path of photo
    const client = new Instagram({ username: "onetouchapplication", password: "oneTouchApp786", cookieStore: cookieStore })

    await client.login();

    let media = await client.getPhotosByUsername({ username: 'onetouchapplication' });
    console.log(media.user.edge_owner_to_timeline_media.edges);

}

testInsnta();