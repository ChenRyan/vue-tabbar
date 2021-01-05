<template>
  <div class="tabbarItem" @click="changeTab" >
    <div v-if="!active"><slot name="item-icon" /></div>
    <div v-if="active" ><slot name="item-icon-active"/></div>
    <div :style="activeStyle"><slot name="item-text" /></div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: "tabbarItem",
  props: {
    url:{
      type: String,
      default:'/about'
    },
    color:{
      type: String,
      default:"#1296DB"
    }
  },
  data() {
    return {
        // active: false
    }
  },
  methods: {
    changeTab(){
      // this.active = true;
      this.$router.replace(this.url)
    },
  },
  computed: {
    active(){
      return this.$route.path == this.url
    },
    activeStyle(){
        return this.active?{color: this.color}:{};
    }
  }
}
</script>

<style scoped>

  .tabbarItem{
  
    display: inline-block;
    flex: 1;

  }

.active{
  color: #1296DB;
}
 
  

</style>
