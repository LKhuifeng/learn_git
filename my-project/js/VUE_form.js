var Myform = Vue.extend({
	props: ['src'],
    template: 
    '<form action="{{src}}" method="post"><p>User name: </p><input type="text" name="fname" /><p>Pass word :</p> <input type="password" name="passw" /><br><input type="submit" value="提交" /></form>'
})

// 注册
Vue.component('my-form', Myform)

// 创建根实例
new Vue({
  el: '#form'
})