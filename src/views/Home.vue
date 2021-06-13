<template>
  <h1 class="text-xl">Subjects</h1>

  <ul>
    <li v-for="subject in subjects" :key="subject.id">
      <router-link :to="{ name: 'Paper', params: { id: subject.id } }">
        {{ subject.name }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { getData } from '@/composables/getData'

  const { getAllSubjectsDetails } = getData()

  const subjects = getAllSubjectsDetails()
</script>

<style scoped></style>
