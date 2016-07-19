<p>16_05_04</p>
<p>学习、安装github</p>
<p>git branch </p>
<p>git log </p>
<p>git checkout </p>
<p>git add<p>
<p>git commit</p>
<p>git push</p>
<p>使用客户端操作更方便</p>
<br>
<p>16_05_05</p>
<p>第一次接触vue，vue安装在全局变量也安装在learn_git</p>
<p>vue是什么，MVVM是什么</p>
<p>使用vue.js进行helloworld等基本操作</p>
<p>v-if。还不理解vue是如何工作的</p>
<br>
<p>16_05_08</p>
<p>写了两个简单的组件button和form</p>
<p>需要了解webpack和.vue文件还有nodejs的export和request</p>
<br>
<p>16_05_11</p>
<p>正则表达式，重新开始开ES6</p>
<p>对于ES6内容中扩展内容很多很难理解</p>
<br>
<p>16_05_16</p>
<p>js学习:http://www.liaoxuefeng.com/</p>
<p>函数：map,set,reduce,for...of,forEach,filter,sort</p>
<p>闭包,箭头函数</p>
<p>16_05_18</p>
<p>Date(),RegExp()---正则,splite()---切分,exec()---匹配正则,</p>
<p>贪婪匹配例子</p>
<!-- var re = /^(\d+)(0*)$/;
re.exec('102300'); // ['102300', '102300', '']
var re = /^(\d+?)(0*)$/;
re.exec('102300'); // ['102300', '1023', '00'] -->
<p>全局匹配</p>
<p>json js的一种结构,使js数据能让其他语言解析</p>
<p>16_05_19~22</p>
<p>__proto__ 对象继承  或者使用 Object.create()创建一个相同的对象</p>
<!-- <p>原型继承</p>
function PrimaryStudent(props) {
    // 调用Student构造函数，绑定this变量:
    Student.call(this, props);
    this.grade = props.grade || 1;
} -->
<p>ES6的class继承</p>
<!-- class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
} -->
<p>window. ---浏览器 navigator. ---显示浏览器内容</p>
<p>screen. ---窗口信息 location. ---URL</p>
<p>document.    .children .lastElementChild    .style</p>
<p>.appendChild     .removeChild</p>
<p>密码账号表单 </p>
<!-- var
   username = document.querySelect("#username"),
   pwd1 = document.querySelect("#password"),
   pwd2 = document.querySelect("password-2"),
   user_re = /^\w{3,10}/,
   pwd_re = /.{6,20}/;
   if (!user_re.test(username.value)) {
      alert("用户名必须是3-10位英文字母或数字");
      return false;
   } else if (!pwd_re.test(pwd1.value)) {
      alert("密码长度必须是6-20位");
      return false;
   } else if (pwd1.value != pwd2.value) {
      alert("两次密码必须一致");
      return false;
   }
   return true;
} -->
<p>操作文件 ----还不懂使用</p>
<p>var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象
</p>
<p>request.status  request.responseText等..... request返回了服务器给的数据</p>
<br>
<p>5_26日</p>
<p>webpack入门中</p>
<p>primise看不太懂</p>
<p>canvas</p>
<br>
<p>5_28日</p>
<p>webpack.config.js文件简化打包过程，直接运行webpack就可以打包</p>
<p>bundle.js为打包文件</p>
<br>
<p>7.18</p>
<p>sass :@import "" @mixin  @include  @content 接受内容  !default</p>
<p>二位数组$px: 5px 10px, 20px 30px;</p>
<p>nth(,)</p>
<p>@each in</p>
<p>@at-root 跳出选择器</p>
<br>
<p>7.19</p>
-ES6
  -let const symbol() 职责分别是块变量，常量，唯一变量
  -变量名和变量值相同时可以使用简写形式
  -解构
  -可设置默认值和不定个数的参数，参数中可以是数组
  -function*(){yield}遍历结构
  -for( of ) 遍历读键值 for( in ) 遍历读键名 arr(index:data)
  -set() Map()
  -箭头函数 x => x * x
  -modules 模块部分 export import
  -WeakMap + WeakSet防止泄露键名
  -proxy(target,handler)  target处理对象  handler处理方法
-sass
  -import ""   $ 变量  !default  默认值
  -二维数组     @each...in...{}
  -嵌套   at-root 跳出嵌套
  -mixin include
  -content
  -lighten(color,%)  darken(,)
  -三目判断if( , , )
  -for var from ... through/to ...{}
  -each 内容 in 对象 {}
-VUE
  - v-bind简写： 绑定数据
  - v-on简写@ 监听事件        方法事件处理器
  - v-if是否加载            条件渲染
  - {{*}}捆绑一次不再该
  - $watch(date,function){}
  - v-show 改变dom样式来显示或者隐藏  
  - v-for 加载数据渲染页面      列表渲染
  - v-model 双向数据绑定
