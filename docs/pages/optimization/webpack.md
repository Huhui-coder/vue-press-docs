# 1.取消.map的加载，这个在开发的时候，方便调试的。

```
 //在webpack配置中
 productionSourceMap: false,

```

# 2.开启gzip加速

如果你的静态资源服务器使用的是nginx ,在nginx.conf配置文件中。

```
   gzip on;
	 gzip_min_length 1k;
	 gzip_comp_level 5;
	 gzip_buffers 4 16k;
	 gzip_types text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/x
```

# 3.使用HappyPack多进程解析和处理文件

由于有大量文件需要解析和处理，所以构建是文件读写和计算密集型的操作，特别是当文件数量变多后，Webpack构建慢的问题会显得更为严重。运行在 Node.之上的Webpack是单线程模型的，也就是说Webpack需要一个一个地处理任务，不能同时处理多个任务。Happy Pack ( https://github.com/amireh/happypack ）就能让Webpack做到这一点，它将任务分解给多个子进程去并发执行，子进程处理完后再将结果发送给主进程。

**项目中HappyPack使用配置：**

```
（1）HappyPack插件安装：
    $ npm i -D happypack
（2）webpack.base.conf.js 文件对module.rules进行配置
    module: {
     rules: [
      {
        test: /\.js$/,
        // 将对.js 文件的处理转交给 id 为 babel 的HappyPack实例
          use:['happypack/loader?id=babel'],
          include: [resolve('src'), resolve('test'),   
            resolve('node_modules/webpack-dev-server/client')],
        // 排除第三方插件
          exclude:path.resolve(__dirname,'node_modules'),
        },
        {
          test: /\.vue$/,
          use: ['happypack/loader?id=vue'],
        },
      ]
    },
（3）webpack.prod.conf.js 文件进行配置    const HappyPack = require('happypack');
    // 构造出共享进程池，在进程池中包含5个子进程
    const HappyPackThreadPool = HappyPack.ThreadPool({size:5});
    plugins: [
       new HappyPack({
         // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
         id:'vue',
         loaders:[
           {
             loader:'vue-loader',
             options: vueLoaderConfig
           }
         ],
         threadPool: HappyPackThreadPool,
       }),

       new HappyPack({
         // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
         id:'babel',
         // 如何处理.js文件，用法和Loader配置中一样
         loaders:['babel-loader?cacheDirectory'],
         threadPool: HappyPackThreadPool,
       }),
    ]

```

