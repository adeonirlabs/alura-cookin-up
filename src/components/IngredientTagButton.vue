<script lang="ts">
import IngredientTag from '@/components/IngredientTag.vue'

export default {
  name: 'IngredientTagButton',
  components: {
    IngredientTag
  },
  props: {
    ingredient: { type: String, required: true }
  },
  emits: ['add-ingredient', 'remove-ingredient'],
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
  }
}
</script>

<template>
  <button :aria-pressed="selected" @click="toggleSelected">
    <IngredientTag :name="ingredient" :selected="selected" />
  </button>
</template>

<style scoped>
button {
  all: unset;
  cursor: pointer;
}
</style>
