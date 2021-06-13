<template>
  <section class="m-5 flex flex-col items-center">
    <h1>{{ title }}</h1>
    <h2>{{ subTitle }}</h2>
  </section>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    title: String,
    subTitle: String,
  })
</script>
