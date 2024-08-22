<script lang="ts">
import type { Category } from '@/types/Category'

import CategoryCard from './CategoryCard.vue'

export default {
  name: 'IngredientsSelection',
  components: {
    CategoryCard
  },
  methods: {
    async fetchCategories() {
      const response = await fetch(
        'https://gist.githubusercontent.com/adeonir/aee35a83ba43245c4ec5edd1cc8e1827/raw/9dd47b536b5e0b7c85e2655a4bc41933b6859514/categories.json'
      )
      const categories: Array<Category> = await response.json()
      return categories
    }
  },
  async created() {
    this.categories = await this.fetchCategories()
  },
  data() {
    return {
      categories: [] as Array<Category>
    }
  },
  emits: ['add-ingredient', 'remove-ingredient']
}
</script>

<template>
  <section class="ingredients-selection">
    <h1 class="heading-lg ingredients-title">Ingredientes</h1>
    <p class="paragraph-lg instructions-text">Selecione abaixo os ingredientes que você quer usar nesta receita:</p>
    <ul class="categories-list">
      <CategoryCard
        v-for="category in categories"
        :key="category.name"
        :category="category"
        @add-ingredient="$emit('add-ingredient', $event)"
        @remove-ingredient="$emit('remove-ingredient', $event)"
      />
    </ul>
    <p class="paragraph text-tips">*Atenção: consideramos que você tem em casa sal, pimenta e água.</p>
  </section>
</template>

<style scoped>
.ingredients-selection {
  width: 100%;
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
