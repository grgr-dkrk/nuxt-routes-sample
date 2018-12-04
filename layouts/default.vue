<template>
  <div class="wrap">
    <c-header />
    <nuxt/>
  </div>
</template>

<style>
.wrap {
  position: relative;
  height: 100vh;
  width: 100vw;
}
</style>

<script>
import Header from '~/components/header'
export default {
  components: {
    'c-header': Header
  }
}
</script>
