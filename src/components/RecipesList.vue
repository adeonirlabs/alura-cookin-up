<script lang="ts">
import type { PropType } from 'vue'

import MainButton from '@/components/MainButton.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import type { Recipe } from '@/types/Recipe'

export default {
  name: 'RecipesList',
  props: {
    ingredients: { type: Array as PropType<string[]>, required: true }
  },
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
    },
    itemsOnBothLists(list1: unknown[], list2: unknown[]) {
      return list1.some((item) => list2.includes(item))
    }
  },
  async created() {
    const recipes = await this.fetchRecipes()
    this.recipes = recipes.filter((recipe: Recipe) => {
      const matchIngredients = this.itemsOnBothLists(recipe.ingredients, this.ingredients)
      return matchIngredients
    })
  },
  data() {
    return {
      recipes: [] as Array<Recipe>
    }
  },
  emits: ['edit-ingredients']
}
</script>

<template>
  <section>
    <h1 class="heading-lg title">Receitas</h1>
    <p class="paragraph-lg result-text">Resultados encontrados: {{ recipes.length }}.</p>
    <div v-if="recipes?.length">
      <p class="paragraph-lg subtitle">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí:
      </p>
      <ul class="recipes-list">
        <RecipeCard v-for="recipe in recipes" :key="recipe.name" :recipe="recipe" />
      </ul>
    </div>
    <div v-else class="paragraph empty-list">
      <p class="paragraph-lg subtitle">Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?</p>
      <img src="@/assets/images/no-recipes.png" alt="Sem resultados" />
    </div>
    <MainButton label="Editar ingredientes" @click="$emit('edit-ingredients')" />
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

.result-text {
  color: var(--green);
  margin-bottom: 0.5rem;
}

.recipes-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipes-list {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}

.empty-list {
  margin-bottom: 3.5rem;
  text-align: center;
}
</style>
