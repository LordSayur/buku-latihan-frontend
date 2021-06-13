import OrganismPaperQuestion from './OrganismPaperQuestion.vue'

export default {
  title: 'Organisms/PaperQuestion',
  component: OrganismPaperQuestion,
}

const Template = (args: any) => ({
  components: { OrganismPaperQuestion },
  setup() {
    return { args }
  },
  template: '<OrganismPaperQuestion v-bind="args" />',
})

export const Primary: any = Template.bind({})
Primary.args = {
  subjectId: 1,
}
