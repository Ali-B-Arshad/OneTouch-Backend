module.exports = {
    apps: [
        {
            name: "OneTouchPublisherServices",
            script: "./app.js",
            watch: false,           
            env_development: {
                "PORT": 5080,
                "NODE_ENV": "development",
                "exec_mode" : "cluster"
            }            
        }
    ]
}