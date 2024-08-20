<script lang="ts">
export default {
  name: 'MainContent',
  data() {
    return {
      ingredients: ['tomate', 'cebola', 'alho', 'pimentão', 'pimenta', 'coentro', 'sal', 'limão']
    }
  }
}
</script>

<template>
  <main class="main-content">
    <section>
      <span class="headline-lg list-title">Sua lista</span>
      <ul v-if="ingredients.length" class="ingredients-list">
        <li v-for="ingredient in ingredients" :key="ingredient" class="ingredient">{{ ingredient }}</li>
      </ul>
      <p v-else class="paragraph empty-list">
        <img src="../assets/images/icons/empty-list.svg" alt="Ícone de pesquisa" />
        Sua lista está vazia, selecione ingredientes para iniciar.
      </p>
    </section>
  </main>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.list-title {
  color: var(--coral, #f0633c);
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
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
  text-transform: capitalize;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
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
