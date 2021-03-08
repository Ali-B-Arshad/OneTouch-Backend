module.exports = {
    apps: [
        {
            name: "OneTouchNotifyServices",
            script: "./app.js",
            watch: false,           
            env_development: {
                "PORT": 6000,
                "NODE_ENV": "development",
                "exec_mode": "cluster"
            }     
        }
    ]
};