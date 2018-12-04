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
      title: 'TOP'
    }
  },
  components: {
    'c-fruit': Fruit
  },
  computed: {
    fruit() {
      return this.$store.getters['fruits/default']
    }
  }
}
</script>
