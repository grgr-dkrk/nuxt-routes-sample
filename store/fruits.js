import fruitsList from '~/data/fruitsList.json'

export const state = () => ({
  items: fruitsList.items,
  default: fruitsList.default,
  error: fruitsList.error
})

export const getters = {
  getFruits(state) {
    return state.items
  },
  default(state) {
    return state.default
  },
  error(state) {
    return state.error
  }
}
