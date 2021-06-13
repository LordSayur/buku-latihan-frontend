<template inherit-attrs="false">
  <div class="flex justify-center items-center mb-5">
    <div v-for="(answer, index) in props.answers" :key="answer" class="m-2">
      <input
        :id="index.toString()"
        :ref="`radio_${index.toString()}`"
        type="radio"
        name="mcq"
        :value="answer"
        @keyup.enter="submit"
      />
      <label class="ml-2" :for="answer">{{ answer }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, onMounted, ref } from 'vue'

  const props = defineProps({
    answers: Object,
  })

  const radio_0 = ref<HTMLElement | null>(null)

  const submit = () => {
    radio_0.value?.click()
    radio_0.value?.focus()
  }

  onMounted(() => {
    radio_0.value?.click()
    radio_0.value?.focus()
  })
</script>
