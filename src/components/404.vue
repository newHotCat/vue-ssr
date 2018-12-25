<template>
  <div class="404">
      <h1>404</h1>
      <p>您访问的页面不存在 {{$route.path}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss" module>
div {
    text-align: center;
    font-size: 100px;
}
</style>
