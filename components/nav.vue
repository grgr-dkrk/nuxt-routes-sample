<template>
  <nav>
    <nuxt-link
      v-for="item in items"
      :key="item.id"
      :to="`/fruits/${item.id}`
      ">
      {{ item.name }}
    </nuxt-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}
a {
  color: #000;
  display: inline-block;
  font-size: 18px;
  padding: 5px 20px;
  text-decoration: none;
}
a.nuxt-link-active {
  pointer-events: none;
  opacity: 0.6;
}
</style>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters['fruits/getFruits']
    }
  }
}
</script>
