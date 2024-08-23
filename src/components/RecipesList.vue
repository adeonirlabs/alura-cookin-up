<script lang="ts">
import MainButton from '@/components/MainButton.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import type { Recipe } from '@/types/Recipe'

export default {
  name: 'RecipesList',
  components: {
    RecipeCard,
    MainButton
  },
  methods: {
    async fetchRecipes() {
      const response = await fetch(
        'https://gist.githubusercontent.com/adeonir/aee35a83ba43245c4ec5edd1cc8e1827/raw/c219a3178191efd334dbbfe4c5e90c03ed7801f5/recipes.json'
      )
      const recipes = await response.json()
      return recipes
    }
  },
  async created() {
    this.recipes = await this.fetchRecipes()
  },
  data() {
    return {
      recipes: [] as Array<Recipe>
    }
  }
}
</script>

<template>
  <section>
    <h1 class="heading-lg title">Receitas</h1>
    <p class="paragraph-lg recipes-result">Resultados encontrados: {{ recipes.length }}.</p>
    <p class="paragraph-lg subtitle">
      Veja as opções de receitas que encontramos com os ingredientes que você tem por aí:
    </p>
    <ul class="recipes-list">
      <RecipeCard v-for="recipe in recipes" :key="recipe.name" :recipe="recipe" />
    </ul>
    <MainButton label="Buscar receitas" @click="$emit('search-recipes')" />
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

.recipes-result {
  color: var(--green);
  margin-bottom: 0.5rem;
}

.recipes-list {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}
</style>
