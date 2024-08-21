<script lang="ts">
export default {
  name: 'IngredientsList',
  props: {
    ingredients: Array<string>
  }
}
</script>

<template>
  <section>
    <span class="headline list-title">Sua lista</span>
    <ul v-if="ingredients?.length" class="ingredients-list">
      <li v-for="ingredient in ingredients" :key="ingredient" class="ingredient">{{ ingredient }}</li>
    </ul>
    <p v-else class="paragraph empty-list">
      <img src="@/assets/images/icons/empty-list.svg" alt="Ícone de pesquisa" />
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<style scoped>
.list-title {
  color: var(--coral);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredients-list {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.ingredient {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cream);
  background: var(--coral);
  font-weight: 700;
  text-transform: capitalize;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral);
  text-align: center;
}
</style>
