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

    @property(cc.Node)
    public button2:cc.Node=null;

    start(){
        ApiConverter.ButtonAddClick(this.button,"Button0","Button0Click","fxk");
        ApiConverter.NodeAddEvent(this.button1,cc.Node.EventType.TOUCH_START,this,this.Collection);
        ApiConverter.NodeAddEvent(this.button2,cc.Node.EventType.TOUCH_START,this,this.LoadResources);
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


        let map = new Map<number,string>();
        //对于存在的key 可以重复set
        map.set(1,"fxk");
        map.set(2,"hyg");
        map.set(3,"xb");

        cc.log(map.get(1));   

        //判断是否存在key
        let ishas = map.has(120);
        cc.log(ishas);

        //字典的大小
        let count= map.size;
        cc.log("字典的个数是"+count);

        //移除一个kv 如果存在返回true 反之 不存在不会报错
        map.delete(120);

        //foreach 打印
        map.forEach((val, key, array) =>{
            cc.log(key+" : "+val);
        });

        //获取所有的key??
        let keys = map.keys();
        
        // 获取所有的value??
        let vals = map.values();

        //清空字典
        map.clear();
    }


    public LoadResources(){
        cc.log("资源加载");
        let self =this;
        cc.loader.loadRes("TestObject",cc.Prefab,function(error: Error, resource: any){
            let nodeX:cc.Node = cc.instantiate(resource);
            cc.loader.release("TestObject");
            nodeX.parent = self.node;
            let image = nodeX.getComponent(cc.Sprite);
            cc.loader.loadRes("test",cc.SpriteFrame,function(error: Error, resource: any){
                image.spriteFrame = resource;
            });
        });
    }   

}
