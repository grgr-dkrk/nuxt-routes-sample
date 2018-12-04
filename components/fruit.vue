<template>
  <section>
    <h2>
      {{ data.name }}
    </h2>
    <figure>
      <img
        :src="path"
        alt=""
      >
    </figure>
    <p>
      {{ data.description }}
    </p>
  </section>
</template>

<style scoped>
section {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
h1 {
  font-size: 24px;
  padding-bottom: 1em;
  order: 1;
}
figure {
  order: 0;
  padding: 10px;
}
p {
  font-size: 18px;
  order: 2;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-44%);
}
</style>

<script>
export default {
  transition: 'fade',
  props: {
    data: {
      type: Object,
      default() {
        return this.$store.getters['fruits/error']
      }
    }
  },
  data() {
    return {
      isOk: false
    }
  },
  computed: {
    path() {
      return require(`~/assets/${this.data.id || 'nashi'}.png`)
    }
  },
  mounted() {
    setTimeout(() => {
      this.isOk = true
    }, 1000)
  }
}
</script>
