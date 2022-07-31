
# 一个Vue2的自定义指令库(不定期更新中...)

  

## 将实际开发中常用的功能封装成自定义指令 :tada::tada::tada:

指令代码存放于**src/directives**,指令使用示例存放于**src/examples**

***

### 1.1 目前已完成的自定义指令 :point_down:

  

1. **v-focus**
> 自动聚焦:bulb:
``` html
<input  type="text"  v-focus /></div>
<textarea v-focus></textarea>
```


2. **v-active**
>高亮切换:bulb:
``` html
<!-- defaultClass:默认类名 activeClass:高亮类名 currentInd:初始高亮元素索引-->
<div class="nav-bar" v-active="{ defaultClass: 'nav-item',activeClass: 'nav-active',currentInd}"></div>
```


3. **v-throttle**
>节流:bulb:
``` html
<!-- 用法一 v-throttle:节流时间="回调函数" 用法二 v-throttle:节流时间="{func:回调函数,type:事件类型,params:回调函数参数}" -->
<button  v-throttle:2000="test1">Submit</button>
```


4. **v-ellipsis**
>超出指定长度省略文本:bulb:
``` html
<!-- v-ellipsis:以px为单位的文本限制长度,不传默认为100px -->
<div  v-ellipsis>test1</div>
<div  v-ellipsis:400>test2</div>
```



5. **v-empty**
>显示缺省的空图片状态:bulb:
``` html
<!-- v-empty="{ 真实图片地址, 错误占位图片地址 }" -->
<div  v-empty="{ real, error }">test</div>
```


6. **v-backtop**
>点击回到顶部:bulb:
``` html
<!-- v-backtop:达到这个距离(px为单位)显示回到顶部按钮,不传参默认直接显示按钮 -->
<div  v-backtop:300 > 回到顶部 </div>
<div  v-backtop > 回到顶部 </div>
```

### 1.2 写在最后 :bell:

> 除了用于工作提效，也是我个人学习进步的记录，指令的实现不一定是最优解，欢迎指正与讨论:blush:

