<script lang="ts">
export default {
  name: 'RecipesList'
}
</script>

<template>
  <section>
    <h1 class="heading-lg title">Receitas</h1>
    <p class="paragraph-lg subtitle">
      Veja as opções de receitas que encontramos com os ingredientes que você tem por aí:
    </p>
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
</style>
