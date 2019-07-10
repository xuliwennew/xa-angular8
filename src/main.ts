import "zone.js"
import "reflect-metadata"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import AppModule from "./app.module";


platformBrowserDynamic().bootstrapModule(AppModule).then(sucess=>{
    console.log("angular 8 bootstrap sucess")
},rejected=>{
    console.log(rejected)
})

