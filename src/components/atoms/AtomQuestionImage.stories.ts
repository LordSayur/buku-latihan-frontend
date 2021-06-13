import AtomQuestionImage from './AtomQuestionImage.vue'

export default {
  title: 'Atoms/QuestionImage',
  component: AtomQuestionImage,
}

const Template = (args: any) => ({
  components: { AtomQuestionImage },
  setup() {
    return { args }
  },
  template: '<AtomQuestionImage v-bind="args"/>',
})

export const Primary: any = Template.bind({})
Primary.args = {
  src: 'https://www.environmentalscience.org/wp-content/uploads/2018/08/physics-640x416.jpg',
  alt: 'physics',
}
