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
export default class ApiConverter 
{
    public static ButtonAddClick(button:cc.Button,componentName:string,methodName:string,customEventData:string){
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = button.node; //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = componentName;//这个是代码文件名
        clickEventHandler.handler = methodName;
        clickEventHandler.customEventData = customEventData;
        button.clickEvents.push(clickEventHandler);
    }
	
    //cc.Node.EventType.TOUCH_START
    //cc.Event.EventTouch
    public static NodeAddEvent<T>(node:cc.Node,eventType:string,target: any,callback: (event: T) => void){
        //node
        node.on(eventType,callback,target);
    }

    public static NodeLookAtTarget(node:cc.Node,target:cc.Node){
        ApiConverter.NodeLookAtPosition(node,target.position);
    }

    public static NodeLookAtPosition(node:cc.Node,position:cc.Vec2){
        let temp=new cc.Vec2(position.x-node.position.x,position.y-node.position.y);
        node.rotation=Math.atan2(temp.x,temp.y)*180/Math.PI;
    }

    public static NodeForwardMove(node:cc.Node,dt:number){
        let temp = cc.pForAngle((90-node.rotation)/180*Math.PI);
        node.position=cc.v2(node.position.x+dt*temp.x,node.position.y+dt*temp.y);
    }

    public static NodeBackMove(node:cc.Node,dt:number){
        ApiConverter.NodeForwardMove(node,-dt);
    }

    public static NodeRightMove(node:cc.Node,dt:number){
       
    }

    public static NodeLeftMove(node:cc.Node,dt:number){
        ApiConverter.NodeRightMove(node,-dt);
    }

    public static Log(object:any){
        let description = "";
        for(let i in object){
            let property=object[i]; 
            description+=i+" = "+property+"\n"; 
        }
        cc.log(description);
    }

}
