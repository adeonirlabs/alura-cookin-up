<script lang="ts">
import type { PropType } from 'vue'

import IngredientTagButton from '@/components/IngredientTagButton.vue'
import type { Category } from '@/types/category'

export default {
  name: 'CategoryCard',
  components: {
    IngredientTagButton
  },
  props: {
    category: { type: Object as PropType<Category>, required: true }
  },
  emits: ['add-ingredient', 'remove-ingredient']
}
</script>

<template>
  <article class="category-card">
    <header class="card-header">
      <img :src="`/images/icons/categories/${category.image}`" :alt="category.name" class="card-image" />
      <h2 class="paragraph-lg card-title">{{ category.name }}</h2>
    </header>
    <ul class="ingredients-list">
      <li v-for="ingredient in category.ingredients" :key="ingredient">
        <IngredientTagButton
          :ingredient="ingredient"
          @add-ingredient="$emit('add-ingredient', $event)"
          @remove-ingredient="$emit('remove-ingredient', $event)"
        />
      </li>
    </ul>
  </article>
</template>

<style scoped>
.category-card {
  width: 19.5rem;
  padding: 1rem 1.5rem 1.5rem;
  border-radius: 1rem;
  background: var(--white);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.card-image {
  width: 5rem;
}

.card-title {
  text-align: center;
  color: var(--green);
  font-weight: 700;
}

.ingredients-list {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
