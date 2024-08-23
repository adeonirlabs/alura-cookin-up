<script lang="ts">
import CategoriesList from './main-content/CategoriesList.vue'
import IngredientsList from './main-content/IngredientsList.vue'
import RecipeButton from './main-content/RecipeButton.vue'

export default {
  name: 'MainContent',
  components: {
    IngredientsList,
    CategoriesList,
    RecipeButton
  },
  data() {
    return {
      ingredients: [] as Array<string>
    }
  },
  methods: {
    addIngredient(ingredient: string) {
      this.ingredients.push(ingredient)
    },
    removeIngredient(ingredient: string) {
      this.ingredients = this.ingredients.filter((item) => item !== ingredient)
    }
  }
}
</script>

<template>
  <main class="main-content">
    <IngredientsList :ingredients="ingredients" />
    <CategoriesList @add-ingredient="addIngredient($event)" @remove-ingredient="removeIngredient($event)" />
    <RecipeButton label="Buscar receitas" />
  </main>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--cream);
  color: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
