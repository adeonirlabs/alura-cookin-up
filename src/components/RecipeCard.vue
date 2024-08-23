<script lang="ts">
import type { PropType } from 'vue'

import type { Recipe } from '@/types/Recipe'

export default {
  name: 'RecipeCard',
  props: {
    recipe: { type: Object as PropType<Recipe>, required: true }
  }
}
</script>

<template>
  <article class="recipe-card">
    <header class="card-header">
      <img :src="`/images/recipes/${recipe.image}`" :alt="recipe.name" class="card-image" />
    </header>
    <section class="card-body">
      <h2 class="paragraph-lg card-title">{{ recipe.name }}</h2>
    </section>
  </article>
</template>

<style scoped>
.recipe-card {
  display: flex;
  width: 17.625rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background: var(--white);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.card-body {
  padding: 2rem 1rem;
}

.card-image {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}

.card-title {
  font-weight: 700;
  color: var(--gray);
}
</style>
