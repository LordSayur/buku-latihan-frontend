<template>
  <form
    class="m-5 flex flex-col justify-center items-center"
    @submit.prevent="submit"
  >
    <AtomQuestionText>
      {{ currentQuestion.text }}
    </AtomQuestionText>

    <AtomQuestionImage
      :src="currentQuestion.image.url"
      :alt="currentQuestion.image.alt"
    />

    <AtomCallout>
      Press ➡ or ⬅ to select answer and press enter to submit
    </AtomCallout>

    <MoleculeQuestionAnswers :answers="currentQuestion.answers" />

    <AtomButton>Submit</AtomButton>
  </form>
</template>
<script setup lang="ts">
  import { computed, defineProps, ref } from 'vue'
  import type { IQuestionDetails } from '@/composables/getData'
  import { getData } from '../../composables/getData'

  const props = defineProps({
    subjectId: Number,
  })

  const questionIndex = ref(0)

  const { getQuestionsDetailsBySubjectId } = getData()

  const questionsDetails = getQuestionsDetailsBySubjectId(props.subjectId!)

  const currentQuestion = computed<IQuestionDetails>((): IQuestionDetails => {
    return questionsDetails
      ? questionsDetails[questionIndex.value]
      : { text: '', image: { url: '', alt: '' }, answers: ['a'] }
  })

  const submit = () => {
    questionIndex.value++
  }
</script>
