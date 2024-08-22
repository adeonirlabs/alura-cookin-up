<script lang="ts">
import type { PropType } from 'vue'

import type { Category } from '@/types/Category'

export default {
  name: 'CategoryCard',
  props: {
    category: { type: Object as PropType<Category>, required: true }
  }
}
</script>

<template>
  <li class="category-card">
    <h2 class="heading-md category-title">{{ category.name }}</h2>
    <ul class="ingredients-list">
      <li class="ingredient-card">{{ category.image }}</li>
    </ul>
  </li>
</template>
