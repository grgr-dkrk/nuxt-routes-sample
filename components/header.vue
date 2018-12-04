<template>
  <header role="banner">
    <h1>
      <nuxt-link to="/">くだもの</nuxt-link>
    </h1>
    <c-nav />
  </header>
</template>

<style scoped>
header {
  position: absolute;
  top: 10px;
  text-align: center;
  width: 100%;
}
a {
  color: #000;
  text-decoration: none;
}
h1 {
  padding-bottom: 10px;
}
</style>

<script>
import Nav from '~/components/nav'
export default {
  components: {
    'c-nav': Nav
  }
}
</script>
