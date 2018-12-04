<template>
  <c-fruit
    :data="fruit"
  />
</template>

<script>
import Fruit from '~/components/fruit'
export default {
  transition: 'fade',
  head() {
    return {
      title: this.$route.params.item
    }
  },
  components: {
    'c-fruit': Fruit
  },
  computed: {
    fruit() {
      const fruit = this.$store.getters['fruits/getFruits'].filter(item => {
        return item.id === this.$route.params.item
      })
      return fruit[0]
    }
  }
}
</script>
