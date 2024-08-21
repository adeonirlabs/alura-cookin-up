<script lang="ts">
import type { Category } from '@/types/Category'

export default {
  name: 'IngredientsSelection',
  props: {
    categories: Array<Category>
  }
}
</script>

<template>
  <section class="ingredients-selection">
    <h1 class="heading-lg ingredients-title">Ingredientes</h1>
    <p class="paragraph-lg instructions-text">Selecione abaixo os ingredientes que você quer usar nesta receita:</p>
    <ul class="categories-list">
      <li v-for="category in categories" :key="category.name">{{ category.name }}</li>
    </ul>
    <p class="paragraph text-tips">*Atenção: consideramos que você tem em casa sal, pimenta e água.</p>
  </section>
</template>

<style scoped>
.ingredients-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-title {
  color: var(--green);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions-text {
  margin-bottom: 2rem;
}

.categories-list {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.text-tips {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .text-tips {
    margin-bottom: 2.5rem;
  }
}
</style>
