<template>
  <div id="nav">
    <router-view />
    <tarbar :tablist="tablist" />
  </div>
</template>

<script>
import tarbar from "components/tabbar";

const tablist = [
  {
    icon: require("./assets/img/home.svg"),
    iconActive: require("./assets/img/home2.svg"),
    text: "首页",
    url: "/",
    color: "#1296DB",
  },
  {
    icon: require("./assets/img/video.svg"),
    iconActive: require("./assets/img/video2.svg"),
    text: "视频",
    url: "/video",
    color: "#1296DB",
  },
  {
    icon: require("./assets/img/about.svg"),
    iconActive: require("./assets/img/about2.svg"),
    text: "关于",
    url: "/about",
    color: "#1296DB",
  },
  {
    icon: require("./assets/img/activity.svg"),
    iconActive: require("./assets/img/activity2.svg"),
    text: "活动",
    url: "/activity",
    color: "#1296DB",
  },
  {
    icon: require("./assets/img/my.svg"),
    iconActive: require("./assets/img/my2.svg"),
    text: "我的",
    url: "/my",
    color: "#1296DB",
  },
];

export default {
  name: "app",
  data() {
    return {
      tablist,
    };
  },
  components: {
    tarbar,
  },
};
</script>
<style>
@import "assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
