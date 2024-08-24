<script lang="ts">
import CategoryCard from '@/components/CategoryCard.vue'
import MainButton from '@/components/MainButton.vue'
import type { Category } from '@/types/category'

export default {
  name: 'CategoriesList',
  components: {
    CategoryCard,
    MainButton
  },
  props: {
    isIngredientsEmpty: { type: Boolean, required: true }
  },
  emits: ['add-ingredient', 'remove-ingredient', 'search-recipes'],
  data() {
    return {
      categories: [] as Array<Category>
    }
  },
  async created() {
    this.categories = await this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      const response = await fetch(
        'https://gist.githubusercontent.com/adeonir/aee35a83ba43245c4ec5edd1cc8e1827/raw/9dd47b536b5e0b7c85e2655a4bc41933b6859514/categories.json'
      )
      const categories: Array<Category> = await response.json()

      return categories
    }
  }
}
</script>

<template>
  <section>
    <h1 class="heading-lg title">Ingredientes</h1>
    <p class="paragraph-lg subtitle">Selecione abaixo os ingredientes que você quer usar nesta receita:</p>
    <ul class="categories-list">
      <CategoryCard
        v-for="category in categories"
        :key="category.name"
        :category="category"
        @add-ingredient="$emit('add-ingredient', $event)"
        @remove-ingredient="$emit('remove-ingredient', $event)"
      />
    </ul>
    <small class="paragraph-sm text-tips">*Atenção: consideramos que você tem em casa sal, pimenta e água.</small>
    <MainButton label="Buscar receitas" :disabled="isIngredientsEmpty" @click="$emit('search-recipes')" />
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: var(--green);
  display: block;
  margin-bottom: 1.5rem;
}

.subtitle {
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
