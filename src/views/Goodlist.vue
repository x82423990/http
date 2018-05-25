<template>
    <div>
        这是商品列表页面
        <span>{{ $route.params.id }}</span><br>
        <span>{{ $route.params.user}}</span>
        <router-link to="/goods/title">显示商品表弟</router-link>
        <router-link to="/goods/image">显示商品图片</router-link>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>