import MoleculeQuestionAnswers from './MoleculeQuestionAnswers.vue'

export default {
  title: 'Molecules/QuestionImage',
  component: MoleculeQuestionAnswers,
}

const Template = (args: any) => ({
  components: { MoleculeQuestionAnswers },
  setup() {
    return { args }
  },
  template: '<MoleculeQuestionAnswers v-bind="args"/>',
})

export const Primary: any = Template.bind({})
Primary.args = {
  answers: ['one', 'two', 'three', 'four'],
}
