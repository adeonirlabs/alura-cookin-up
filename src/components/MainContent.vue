<script lang="ts">
import IngredientsList from './main-content/IngredientsList.vue'
import IngredientsSelection from './main-content/IngredientsSelection.vue'

export default {
  name: 'MainContent',
  components: {
    IngredientsList,
    IngredientsSelection
  },
  data() {
    return {
      ingredients: ['tomate', 'cebola', 'alho', 'pimentão', 'pimenta', 'coentro', 'sal', 'limão']
    }
  }
}
</script>

<template>
  <main class="main-content">
    <IngredientsList :ingredients="ingredients" />
    <IngredientsSelection />
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
