import {Component} from "@angular/core";


@Component({
    selector:"app-hello", //下定义一个组件的标签名
    template:"<h1 class='title'>hello component</h1>", //view
    styles:[".title {color:red}"] //内置样式
})
export default class HelloComponent {

}
