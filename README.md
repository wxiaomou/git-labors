# Profile
> Target：使用Webpack提升前端开发效率
> Techs：NodeJs + Npm + Babel + Webpack + Less

### Features
* 支持 ES6
* 支持 React
* 支持 Fetch
* 支持 jQuery
* 支持 antd
* 支持 Less
* 支持 Font-Awesome

### Usage
> 1、安装依赖：$ npm install
> 2、启动应用：$ npm start
> 3、静态编译：$ npm run build

### Version
1. Node : 4.5.0
2. Npm  : 3.10.8

### Screencapture

==============================
NOTE:

DO NOT UPGRADE react-slide-deck
Due to the windows handleWheel event error,
we changed node_modules/react-slide-deck/dist/deck.js && node_modules/react-slide-deck/src/deck.js
in line 184(src) && 383(dist)
if (prevWheelDelta !== undefined && Math.abs(delta) / Math.abs(prevWheelDelta) < 1) return;
