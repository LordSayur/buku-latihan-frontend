import AtomQuestionText from './AtomQuestionText.vue'

export default {
  title: 'Atoms/QuestionText',
  component: AtomQuestionText,
}

const Template = (args: any) => ({
  components: { AtomQuestionText },
  setup() {
    return { args }
  },
  template:
    '<AtomQuestionText v-bind="args">What is physics?</AtomQuestionText>',
})

export const Primary: any = Template.bind({})
Primary.args = {}
