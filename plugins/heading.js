MyPlugin = {
    install(Vue,options){
        Vue.component("heading",{
            functional: true,   //函数化组件
            props:{
                level:{
                    type: String,
                    required: true
                },
                title:{
                    type: String,
                    default: ''
                },
                icon:{
                    type: String,
                }
            },

            
            render(h,context){
                const { level ,icon ,title} = context.props //从context上下文中获取属性
                // 子节点数组
                let children=[]
                // icon属性的额判断
                if (icon){
                    // <svg class="xx"><use xlink:href="#"</svg>
                    children.push(h(
                        'svg',
                        {class: "xx"},
                        // 子节点是个数组，继续h()
                        [h(
                            'use',
                            {attrs: {"xlink:href": '#icon-'+icon}}
                            )]

                    ))
                }
                // 拼接
                // 用context的children属性获取子元素（子节点）的信息，本利是插槽
                children = children.concat(context.children)
                const vnode1=h(

                    'h'+ level,  //参数1，tagname
                    {attrs:{title: title+'okok'}} , //参数2，{。。。}
                    children //参数3，子节点的数组
                )                
                // snabbdom
                console.log(vnode1);
                // h就是createElemenet,返回h返回的vnode
                return vnode1
            }
        })
    }
}

if (window !=="undefined" && window.Vue) {
    window.Vue.use(MyPlugin)
}