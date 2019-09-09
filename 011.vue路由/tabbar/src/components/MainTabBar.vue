<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="../assets/images/tabbar/home.svg" alt="home"/>
      <img slot="item-icon-active" src="../assets/images/tabbar/home_active.svg" alt="home_active"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="../assets/images/tabbar/classify.svg" alt="classify"/>
      <img slot="item-icon-active" src="../assets/images/tabbar/classify_active.svg" alt="classify_active"/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="../assets/images/tabbar/cart.svg" alt="cart"/>
      <img slot="item-icon-active" src="../assets/images/tabbar/cart_active.svg" alt="cart_active"/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="../assets/images/tabbar/profile.svg" alt="profile"/>
      <img slot="item-icon-active" src="../assets/images/tabbar/profile_active.svg" alt="profile_active"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "./tarbar/TabBar";
  import TabBarItem from "./tarbar/TabBarItem";

  export default {
    name: "MainTarBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped>

</style>
