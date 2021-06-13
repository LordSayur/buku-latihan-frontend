<template inherit-attrs="false">
  <div class="mb-5 flex justify-center h-80">
    <img class="h-full" v-bind="attrs" />
  </div>
</template>

<script setup lang="ts">
  import { useContext } from 'vue'
  const { attrs } = useContext()
</script>
