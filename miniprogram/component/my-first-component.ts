// component/my-first-component.ts
Component({
    /**
     * 组件的属性列表
     */
    externalClasses: ['classname'],
    // 默认只允许有一个slot 要想写多个 必须这个配置
    options: {
        multipleSlots: true,
        styleIsolation: 'isolated',
    },

    properties: {
        innerText: {
            type: String,
            value: '默认消息'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
