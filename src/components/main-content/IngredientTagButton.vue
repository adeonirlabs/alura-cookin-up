<script lang="ts">
import IngredientTag from './IngredientTag.vue'

export default {
  name: 'IngredientTagButton',
  props: {
    ingredient: { type: String, required: true }
  },
  components: {
    IngredientTag
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    toggleSelected() {
      this.selected = !this.selected

      if (this.selected) {
        this.$emit('add-ingredient', this.ingredient)
      } else {
        this.$emit('remove-ingredient', this.ingredient)
      }
    }
  },
  emits: ['add-ingredient', 'remove-ingredient']
}
</script>

<template>
  <button @click="toggleSelected" :aria-pressed="selected">
    <IngredientTag :name="ingredient" :selected="selected" />
  </button>
</template>

<style scoped>
button {
  all: unset;
  cursor: pointer;
}
</style>
