<template>
  <header class="banner">
    <div class="presentation">
      <img src="../assets/images/logo.svg" alt="Cookin'Up logo" class="logo" />
      <p class="heading-lg heading-text">
        <span class="text-green">Um banquete de ideias para </span>despertar o chef que há em você!
      </p>
      <p class="headline-lg">Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!</p>
    </div>
    <img
      src="../assets/images/banner-picture.png"
      alt="Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. Ela está sorrindo e está apoiando o celular entre o seu rosto e o ombro."
      class="banner-picture"
    />
  </header>
</template>

<style scoped>
.banner {
  padding: 4rem 7.5rem;
  color: var(--cream);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 3.25rem;
}

.logo {
  height: 4.5rem;
  margin-bottom: 3rem;
}

.heading-text {
  margin-bottom: 2rem;
}

.text-green {
  color: var(--green);
}

.banner-picture {
  width: 35rem;
}

@media only screen and (max-width: 1300px) {
  .banner {
    padding: 4rem 3.75rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
  .banner {
    padding: 4rem 1.5rem;
  }

  .banner-picture {
    width: min(100%, 21.25rem);
  }
}
</style>
