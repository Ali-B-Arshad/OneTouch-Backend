module.exports = {
    apps: [
        {
            name: "OneTouchFeedsServices",
            script: "./app.js",
            watch: false,           
            env_development: {
                "PORT": 5050,
                "NODE_ENV": "development",
                "exec_mode" : "cluster"
            }
        }
    ]
}