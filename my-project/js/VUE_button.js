var Mybutton = Vue.extend({
	props: ['msg','content'],
    template: '<button class="bt_{{ msg }}">{{ content }}</button>'
})

// 注册
Vue.component('my-button', Mybutton)

// 创建根实例
new Vue({
  el: '#button'
})