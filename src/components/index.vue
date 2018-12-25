<template>
  <div class="index">
      my is vue router index path '/'
      <p>{{count}}</p>
      <button @click="INCREMENT">增加</button>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {INCREMENT} from '../store/constants.js'

export default {
  computed: {
      ...mapState(['count'])
  },
  methods: {
      ...mapActions([INCREMENT]),
  }
}
</script>

<style lang="scss" module>
</style>
