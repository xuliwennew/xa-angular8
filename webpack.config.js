var path = require("path");
var webpack = require("webpack");

module.exports = {
    mode:"development",
    entry:{
        "app": path.resolve(__dirname,"src/main.ts")
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].bundle.js"
    },
    resolve:{
        extensions:[".js",".ts",".css"]
    },
    module:{
        rules:[
            {test:/\.ts$/,loader:"ts-loader"}
        ]
    }

}
