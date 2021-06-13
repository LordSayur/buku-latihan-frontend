<template>
  <AtomPaperTitle
    :title="getSubjectName"
    sub-title="Multiple Choice Questions"
  />

  <OrganismPaperQuestion :subject-id="+id" />
</template>

<script setup lang="ts">
  import { computed, defineProps } from '@vue/runtime-core'
  import { getData } from '@/composables/getData'

  const props = defineProps({
    id: String,
  })

  const { getSubjectDetailsById } = getData()
  const subjectDetails = getSubjectDetailsById(+props.id!)

  const getSubjectName = computed(() => {
    return subjectDetails ? subjectDetails.name : 'Subject'
  })
</script>
