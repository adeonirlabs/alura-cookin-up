<script lang="ts">
import CategoriesList from '@/components/CategoriesList.vue'
import IngredientsList from '@/components/IngredientsList.vue'
import RecipesList from '@/components/RecipesList.vue'

type Content = 'categories' | 'recipes'

export default {
  name: 'MainContent',
  components: {
    IngredientsList,
    CategoriesList,
    RecipesList
  },
  data() {
    return {
      ingredients: [] as Array<string>,
      content: 'categories' as Content
    }
  },
  methods: {
    addIngredient(ingredient: string) {
      this.ingredients.push(ingredient)
    },
    removeIngredient(ingredient: string) {
      this.ingredients = this.ingredients.filter((item) => item !== ingredient)
    },
    navigate(content: Content) {
      this.content = content
    }
  }
}
</script>

<template>
  <main class="main-content">
    <IngredientsList :ingredients="ingredients" />
    <CategoriesList
      v-if="content === 'categories'"
      :isIngredientsEmpty="ingredients.length === 0"
      @add-ingredient="addIngredient($event)"
      @remove-ingredient="removeIngredient($event)"
      @search-recipes="navigate('recipes')"
    />
    <RecipesList v-else-if="content === 'recipes'" @edit-ingredients="navigate('categories')" />
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
