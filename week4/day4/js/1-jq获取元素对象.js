/* 目标：
* 1. 掌握jq常用的获取元素对象的方式以及常用的选择器
* 2. 理解jq，$是一个类（函数）
* 3. $() 方法返回的是一个jq的实例对象、以及jq类的原型
* */
// 常用的获取元素对象
// 有DOM映射：
// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName

// 无DOM映射：
// querySelector / querySelectorAll
// ________________________分割线_____________________________

// 普通获取方式
let tabBox = document.getElementById('tabBox');
let tabBox2 = document.querySelector('#tabBox');
// console.log(tabBox)

// jquery（下称：jq）获取；jq获取的元素对象以类数组的形式存在，是$()的返回结果；$ 是一个函数，只有函数能加小括号执行。
// let $tabBox = $('#tabBox');
// console.log($tabBox);
// console.log('$ is ',typeof $);
// console.log($);

// 常用的jq选择器
/*
* jquery通过选择器的方式获取的元素，不一定只获取一个，而是不管获取到几个都会返回一个元素集合（类数组），这些元素在类数组中获得了一个索引值。原生方法获取不到时会返回null，jq获取不到仍然返回一个对象。在jq的返回对象中有一个length属性，这个属性表示获取到的个数。
* 
* */

// 1. 基本选择器
//  1.1 id 选择器 #ID
//  1.2 className 类选择器 .className
//  1.3 标签选择器 p ul li div
// console.log('id 选择器', $('#tabBox'));
// console.log('className 选择器', $('.header'));
// console.log('标签选择器 ', $('li'));

// console.log('原生方法获取不到时 ', document.getElementById('zhangsan'));
// console.log('jq 获取不到时', $('#tabBox>li'));

// 2. 层级选择器
// 2.1 后代选择器 就是一个空格 #tabBox li （获取id为tabBox的所有子孙代中的li）；
// 2.2 子级选择器 > #tabBox > ul (只在儿子代中查找)
// 2.3 兄弟选择器 + .header + div 
// 2.4 获取所有的弟弟 li.active ~ 
// console.log($('#tabBox li'));
// console.log($('.header + div'));
// console.log($('li.active ~'));

// 3. 过滤选择器
// 3.1 :first 获取第一个
// 3.2 :last 获取最后一个
// 3.3 :odd 获取奇数索引的
// 3.4 :even 获取偶数索引的
// 3.5 :not(selector) 除了selector的都要； :not(first) 除了第一个都要
// 3.6 :eq(index) 获取索引为index的
// 3.7 :gt(index) 获取比索引index大的
// 3.8 :lt(index) 获取比索引index小的

// console.log($('.header li:first'));
// console.log($('.header li:last'));
// console.log($('.header li:odd'));
// console.log($('.header li:even'));
// console.log($('.header li:not(:first)'));
// console.log($('.header li:eq(1)'));
// console.log($('.header li:gt(1)'));
// console.log($('.header li:lt(1)'));

// 4. 内容选择器
// 4.1 :contains('内容') 获取包含指定内容的元素
// 4.2 :empty 获取空标签元素
// 4.3 :has(selector) 获取包含指定选择器元素的元素
// 4.4 :hidden 获取不可见的元素对象
// console.log($('p:contains("霸道")'));
// console.log($('p:empty'));
// console.log($('p:has("span")'));
// console.log($('p:hidden'));

// 5. 属性选择器
// 5.1 [attr=val] 获取含有属性attr并且其值是val的元素
// 5.2 [attr^=val] 获取含有attr属性并且其值是以val开头的元素
// 5.3 [attr$=val] 获取含有attr属性并且其值是以val结尾的元素
// 5.4 [attr*=val] 获取含有attr属性并且其值包含val的元素
// console.log($('input[name=man]'));
// console.log($('input[name^=man]'));
// console.log($('input[name$=man]'));
// console.log($('input[name*=man]'));



// 关于DOM映射
// 原生方法：
// let ul = document.getElementById('emptyUl'); // 先获取ul
// let lis = ul.getElementsByTagName('li');
// // console.log(lis);
// ul.innerHTML = '<li>一个li的字符串</li>';
// console.log(lis);


// jq
let $li = $('#emptyUl > li');
console.log($li); // 没有获取到
$('#emptyUl').html('<li>这是用jq搞出来的</li>');
console.log($li); // 依然是空的

/*
* jq获取的元素（集合）是不存在DOM映射机制的。如果存在动态的数据绑定，我们需要在动态绑定后重新获取一遍元素集合。
*
* */





















































