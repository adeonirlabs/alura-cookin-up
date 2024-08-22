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
  }
}
</script>

<template>
  <button @click="selected = !selected" :aria-pressed="selected">
    <IngredientTag :name="ingredient" :selected="selected" />
  </button>
</template>

<style scoped>
button {
  all: unset;
  cursor: pointer;
}
</style>
