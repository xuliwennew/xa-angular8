import {NgModule} from "@angular/core";
import AppComponent from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import HelloComponent from "./components/hello.component";


@NgModule({
    imports:[
        BrowserModule
    ], //在当前模块中导入其它的子模块
    exports:[], //把当前的模块导出
    declarations:[
        AppComponent,
        HelloComponent
    ], //注册整个项目的组件
    providers:[],
    bootstrap:[AppComponent] //指定根组件
})
export default class AppModule {

}
