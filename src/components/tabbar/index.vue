<template>
  <!-- <div class="tabbar">
        <slot></slot>
    </div> -->
  <div class="tabbar">
    <tabbar-item
      v-for="(item, index) in tablist"
      :key="index"
      :url="item.url"
      :color="item.color"
    >
      <template v-slot:item-icon>
        <img :src="item.icon" />
      </template>
      <template v-slot:item-icon-active>
        <img :src="item.iconActive" />
      </template>
      <template v-slot:item-text>
        <div>{{ item.text }}</div>
      </template>
    </tabbar-item>
  </div>
</template>

<script type="text/javascript">
import TabbarItem from "./tabbarItem.vue";

const tablist = {
  type: Array,
  default: [
    {
      icon: require("../../assets/img/home.svg"),
      iconActive: require("../../assets/img/home2.svg"),
      text: "首页",
      url: "/",
      color: "",
    },
    {
      icon: require("../../assets/img/home.svg"),
      iconActive: require("../../assets/img/home2.svg"),
      text: "视频",
      url: "/video",
    },
    {
      icon: require("../../assets/img/home.svg"),
      iconActive: require("../../assets/img/home2.svg"),
      text: "关于",
      url: "/about",
    },
    {
      icon: require("../../assets/img/home.svg"),
      iconActive: require("../../assets/img/home2.svg"),
      text: "我的",
      url: "/my",
    },
  ],
};

export default {
  name: "tarbar",
  props: {
      tablist
  },
  data() {
    return {};
  },
  components: {
    TabbarItem,
  },
};
</script>

<style  scoped>
.tabbar {
  display: flex;
  background: #ddd;
position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
}
 img{
    width: 30px;
    height: 30px;
  }


</style>
