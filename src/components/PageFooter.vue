<script lang="ts">
export default {
  name: 'PageFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<template>
  <footer>
    <span>Desenvolvido por Adeonir no curso da Alura | {{ currentYear }}</span>
    <span>Projeto fictício, sem fins comerciais</span>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  padding: 1.5rem 7.5rem;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

span {
  font-size: 0.875rem;
  color: var(--white);
  font-weight: 300;
}

@media only screen and (max-width: 1300px) {
  footer {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  footer {
    padding: 1.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
