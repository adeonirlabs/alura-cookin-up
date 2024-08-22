<script lang="ts">
import type { PropType } from 'vue'

import IngredientTag from './IngredientTag.vue'

export default {
  name: 'IngredientsList',
  props: {
    ingredients: { type: Array as PropType<string[]>, required: true }
  },
  components: {
    IngredientTag
  }
}
</script>

<template>
  <section>
    <span class="headline list-title">Sua lista</span>
    <ul v-if="ingredients?.length" class="ingredients-list">
      <li v-for="ingredient in ingredients" :key="ingredient">
        <IngredientTag :name="ingredient" active />
      </li>
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
