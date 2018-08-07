import ApiConverter from "./ApiConverter";

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Demo extends cc.Component {

    @property(cc.Button)
    public button:cc.Button = null;

    @property(cc.Node)
    public button1:cc.Node=null;

    start(){
        ApiConverter.ButtonAddClick(this.button,"Button0","Button0Click","fxk");

        ApiConverter.NodeAddEvent(this.button1,cc.Node.EventType.TOUCH_START,this.Collection);
    }

    public Collection(event:cc.Event.EventTouch):void{

        //普通数组
        let normalArray= [1,2,3,5,6];

        cc.log("for");
        for(let ix=0;ix<normalArray.length;ix++){
            cc.log(normalArray[ix]);
        }

        cc.log("for of");
        for(let item of normalArray){
            cc.log(item);
        }

        cc.log("for in");
        for (const key in normalArray) {
            if (normalArray.hasOwnProperty(key)) {
                const element = normalArray[key];
                cc.log(element);
            }
        }

        cc.log("for each 不能return");
        normalArray.forEach(element => {
            cc.log(element);
        });

        cc.log("for every 可以return");
        normalArray.every((val, idx, array) =>{
            // val: 当前值
            // idx：当前index
            // array: Array
            cc.log("值 = "+val);
            cc.log("idx = "+idx);
            return true;
            // Return false will quit the iteration
        });

        // array 数组
        let array = new Array<number>();
        for(let i = 20;i<30;i++){
            //数组添加
            array.push(i);
        }

        //数组最后一个移除
        array.pop();

        //数组第一个删除
        array.shift();

        //数组从第n个开始移除总共m个 也可以清空所有 也可以单独移除一个 序号从0开始 那么3就应该是第四位
        array.splice(3,1);

        //排序
        array.sort();

        //反转
        array.reverse();

        //通过空格连接数组每一个元素
        let arrayStr = array.join(" ");

        //通过元素查找index
        let index = array.indexOf(21)
        cc.log("21在数组中的位置是"+index);

        let a = array[0];
        cc.log("数组第0个的值"+a);

        for(let item of array){
            cc.log(item);
        }

        cc.log(arrayStr);   


        let dic = new Map<number,number>();

    }


}
