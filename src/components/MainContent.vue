<script lang="ts">
export default {
  name: 'MainContent',
  data() {
    return {
      ingredients: ['tomate', 'cebola', 'alho', 'pimentão', 'pimenta', 'coentro', 'sal', 'limão'],
      categories: [
        {
          name: 'Laticínios e Ovos',
          image: 'dairy_and_eggs.png',
          ingredients: [
            'ovos',
            'queijo',
            'leite',
            'manteiga',
            'creme de leite',
            'iogurte',
            'leite condensado',
            'sorvete'
          ]
        },
        {
          name: 'Farinhas e Fermentos',
          image: 'flours_and_leavening_agents.png',
          ingredients: [
            'farinha de trigo',
            'polvilho',
            'farinha de rosca',
            'canjica',
            'farinha de mandioca',
            'fubá',
            'linhaça',
            'fermento químico'
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <main class="main-content">
    <section>
      <span class="headline list-title">Sua lista</span>
      <ul v-if="ingredients.length" class="ingredients-list">
        <li v-for="ingredient in ingredients" :key="ingredient" class="ingredient">{{ ingredient }}</li>
      </ul>
      <p v-else class="paragraph empty-list">
        <img src="../assets/images/icons/empty-list.svg" alt="Ícone de pesquisa" />
        Sua lista está vazia, selecione ingredientes para iniciar.
      </p>
    </section>
    <section>
      <div class="ingredients-selection">
        <h1 class="heading-lg ingredients-title">Ingredientes</h1>
        <p class="paragraph-lg instructions-text">Selecione abaixo os ingredientes que você quer usar nesta receita:</p>
        <ul class="categories-list">
          <li v-for="category in categories" :key="category.name">{{ category.name }}</li>
        </ul>
        <p class="paragraph text-tips">*Atenção: consideramos que você tem em casa sal, pimenta e água.</p>
      </div>
    </section>
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

.ingredients-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-title {
  color: var(--green);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions-text {
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

  .text-tips {
    margin-bottom: 2.5rem;
  }
}
</style>
