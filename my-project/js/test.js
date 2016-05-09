var Myhead = Vue.extend({
	props: ['imgsrc','alt','msg'],
    template: '<div class="{{msg}}"><img src={{imgsrc}} alt="{{alt}}" id="{{msg}}"></div>'
})

// 注册
Vue.component('my-head', Myhead)

// 创建根实例
new Vue({
  el: '.head'
})

