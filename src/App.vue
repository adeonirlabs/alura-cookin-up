<script lang="ts">
import HomeBanner from '@/components/HomeBanner.vue'
import MainContent from '@/components/MainContent.vue'
import PageFooter from '@/components/PageFooter.vue'

export default {
  components: {
    HomeBanner,
    MainContent,
    PageFooter
  }
}
</script>

<template>
  <HomeBanner />
  <MainContent />
  <PageFooter />
</template>
