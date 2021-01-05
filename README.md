# vue-tabbar

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


 
类似微信小程序的tabbar，支持任意数量的tab、支持更换图标、激活状态的图标、支持文字和颜色，tab数据格式如下：
{
    icon: require("./assets/img/home.svg"),
    iconActive: require("./assets/img/home2.svg"),
    text: "首页",
    url: "/",
    defaultColor: "#111",
    activeColor: "#1296DB",
  }
