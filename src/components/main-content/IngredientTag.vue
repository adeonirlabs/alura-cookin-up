<script lang="ts">
export default {
  name: 'IngredientTag',
  props: {
    name: { type: String, required: true },
    active: Boolean,
    selected: Boolean
  }
}
</script>

<template>
  <span :class="['tag-name', { active, selected }]">{{ name }}</span>
</template>

<style scoped>
.tag-name {
  display: inline-block;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--gray);
  background: var(--gray-light);
  text-transform: capitalize;
}

.tag-name.active {
  color: var(--cream);
  background: var(--coral);
}

.tag-name.selected {
  color: var(--gray-light);
  background: var(--gray);
}
</style>
