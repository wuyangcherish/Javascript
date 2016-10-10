### #react-native 的学习：

1. 首先捏可能定是要把环境给倒置好的。
	* 都要装什么呢？ 	
		1. node xcode npm brew 都是必须的
		2. watchman flow是可选的最好都装上。装好了不报错。也不会有warn 对于一个初学者或者是强迫症的。我觉得有err 或者warn 都是件很难受的事情
	* 接下来要干嘛：
		1. 安装react-native-cli npm install react-native-cli
			1. 如果你的必须是sudo 安装说明你的npm 下面的东西安装的有问题。我在好朋友快被我烦死的情况下。搞定了我的npm tnpm 等等工具的权限问题。恩。。。下面是我解决的时候的步骤大神可以略过。。。。^_^
			2. 因为你如果权限没同意的话。react-native init HelloWorld 的时候你会发现里面的东东可真不是一点乱,xcode 不可能顺利的打开。
			3. 如果按照上述步骤你还是没权限用Xcode打开的话。。你还是重新再装一次吧哈哈哈
2. 上面都是学习之前的问题。我也是个菜鸟。所以我不想把react-native 讲的多牛。。好吧。我也没能力哈哈。所以我像按照我初学时候遇到的各种问题展开写一篇就算是问题纠错的学习笔记吧。
	* enenne首先 你得懂得flex的布局。其次你应该懂得JSX的语法。这些的链接我都写出来啦。。。look~
	* 接下俩猜到真真的学习啦；
	* react Native 不实现css 而用js的方式写出来然后再引用
	
3. 布局问题：	
	1. alignItems：view 里面的 text 水平居中
	2. justiyContent: view 里面的 text 垂直居中
	3. 这两个都写的话是水平垂直居中。
	4. 默认的时候flex 的flexDirection是：“cloumn”，所以要想让View 里面的text按行排列的话。要设置这个值为“row”
	5. 在inline元素上设置padding的话不会起作用的。
	6. 在inline元素上面可以设置margin
	7. 所以说在 RN里面的Text相当于是一个不能设置padding的block元素.
	8. 关于Text样式继承的问题：
		1. 在 RN 里面实际是没有继承这个说法的。但是Text元素上面有继承的。继承的是父级的元素
		2. 文字居中还有个textAlign : center 呢。。。。别只记得margin了。
		3. 在重启一个文件的时候最重要的是关闭掉上一个文件的终端，然后重新启动应用。否则的话。一直读取的是上一个文件

4. 获取数据的问题
	1. 方法1 ： 可以在render函数里面用 getInitailState 函数来默认一组数据，
		* 优点。写起来方便使用起来方便
		* 缺点。更新比较困难
	2. 还有一种方法是写在data.json 里面。在index.ios.js 里面require('./data.json'). 获取过来的是字符串。所以要用一个函数行行解析一下。变成字符串。然后再循环该json 。这样的话就可以实现数据输出了
		* 优点。数据更改比较方便。
		* 缺点。获取数据没有第一个直接获取去json 方便
5. 图片的问题：
	1. 一定要定义图片的宽高。否则会发现图片显示不了。
	
### <font color="red">学习心得</font>

1. 多多写出来东西才是王道。。。	