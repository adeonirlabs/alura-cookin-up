<script lang="ts">
export default {
  name: 'MainButton',
  props: {
    label: { type: String, required: true }
  }
}
</script>

<template>
  <button>
    {{ label }}
  </button>
</template>

<style scoped>
button {
  width: 20rem;
  padding: 1rem;
  border-radius: 2rem;
  font-weight: 700;
  color: var(--cream);
  background: var(--coral);
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover:not(:disabled) {
  background: var(--ochre-hover);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
