module.exports = {
    apps: [
        {
            name: "OneTouchUserServices",
            script: "./app.js",
            watch: false,          
            env_development: {
                "PORT": 3000,
                "NODE_ENV": "development",
                "exec_mode": "cluster"
            }            
        }
    ]
}