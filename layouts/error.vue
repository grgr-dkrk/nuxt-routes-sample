<template>
  <div class="wrap">
    <c-header />
    <div>
      <c-fruit />
    </div>
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
import Fruit from '~/components/fruit'

export default {
  components: {
    'c-header': Header,
    'c-fruit': Fruit
  }
}
</script>
