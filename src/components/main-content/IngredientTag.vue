<script lang="ts">
export default {
  name: 'IngredientTag',
  props: {
    name: { type: String, required: true }
  }
}
</script>

<template>
  <span class="tag-name">{{ name }}</span>
</template>

<style scoped>
.tag-name {
  display: inline-block;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cream);
  background: var(--coral);
  text-transform: capitalize;
}
</style>
