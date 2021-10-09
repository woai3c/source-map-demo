# source-map-demo
对压缩过的代码报错信息进行还原
## 使用
执行以下命令后，打开 `http://localhost:8080/` 访问静态页面。
```
npm run dev
```
执行以下命令打开服务器
```
npm run server
```

在页面中先点击第一个按钮获取该页面生成的 js 报错信息，然后再点击第二个按钮获取未压缩前的代码报错信息。

<img width="600" src="https://user-images.githubusercontent.com/22117876/136667865-a494c486-6f2e-4680-be7a-3a00958c8e62.png"/>

## 原理
利用 `window.onerror` 将获取到的代码报错信息的文件名、行、列等信息传到后端。

打包后的代码如果选择了生成 sourcemap，那么每个 js 文件都会有一个对应的 map 文件，例如：
```
bundle.js
bundle.js.map
```
利用这个逻辑，就可以通过 js 文件名找到对应的 map 文件。再通过 `source-map` 这个库获取到未压缩前的代码信息传给前端，然后在页面展示出来。
