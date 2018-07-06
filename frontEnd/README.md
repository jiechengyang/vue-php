### 前端部署
```
部署前准备
1.安装node.js
  前端部分是基于node.js上运行的，所以必须先安装node.js，版本要求为6.9.0以上(推荐安装官方推荐版本)，下载地址：https://nodejs.org/zh-cn/
2.程序运行之前需搭建好Server端
  vueThink的后端搭建请参考这里（https://github.com/honraytech/VueThink/tree/master/php），此处不再多述。
  
完成以上两个步骤之后，我们进入到frontEnd这个目录，然后按顺序执行以下两行代码就可以愉快地玩耍了。
npm install or cnpm install
npm run dev or cnpm run dev

注意：前端服务启动，默认会占用8080端口，所以在启动前端服务之前，请确认8080端口没有被占用。
如果想替换前端默认端口，可修改config/index.js里面的dev对象的port参数，但不建议这么做。
另外接口请求本地服务的端口是80端口，如果配置后端服务的时候启动的不是80端口，可在build/webpack.base.conf.js里修改DEV_HOST（开发环境请求地址）。
```
