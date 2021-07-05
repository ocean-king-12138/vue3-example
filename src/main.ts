import { createApp,createRenderer, h } from 'vue'
import App from './App.vue'
import CanvasApp from "./CanvasApp.vue"
import EditTodos from "./components/todos/EditTodos.vue"
createApp(App)
    .component("EditTodos",EditTodos)
    .component("comp", {
        render() {
            return h("div","success")
        },
    })
    .mount('#app')
const nodeOps = {
    createElement(tag:any) {
        return {tag}
    },
    insert(child:any,parent:any) {
        child.parent = parent;
        if (!parent.child)
            parent.child = [child]
        else
            parent.child.push(child)
        if (parent.nodeType == 1) {
            draw(child)
            if (child.onclick) {
                canvas.addEventListener("click", () => {
                    child.onclick();
                    setTimeout(() => { draw(child) }, 0);
                })
            }
        }
    },
    patchProp: (el:any, key:any, prevValue:any, newValue:any) => {
        el[key] = newValue;
    },
    // remove, createText, createComment, setText 
    remove: (child: any) => { },
    createText: (text: any) => { },
    createComment: (text: any) => { },
    setText: (text: any) => { },
    //setElementText, parentNode, nextSibling
    setElementText: (el:any,text:any) => { },
    parentNode: (node:any) => { },
    nextSibling: (node:any) => { },
}
function draw(el:any) {
    
}
let ctx,canvas:any
const renderer = createRenderer(nodeOps)
function createCanvasApp(App:any) {
    const app = renderer.createApp(App);
    const mount = app.mount;
    //@ts-ignore
    app.mount=function(selector){
        canvas = document.createElement("canvas")
        ctx = canvas.getContext("2d")
        canvas.width = 600;
        canvas.height = 600;
        document.querySelector(selector).appendChild(canvas)
        mount(canvas)
    }
    return app;
}
//createCanvasApp(CanvasApp).mount("#demo")
