import AtomPaperTitle from './AtomPaperTitle.vue'

export default {
  title: 'Atoms/PaperTitle',
  component: AtomPaperTitle,
}

const Template = (args: any) => ({
  components: { AtomPaperTitle },
  setup() {
    return { args }
  },
  template: '<AtomPaperTitle v-bind="args"/>',
})

export const Primary: any = Template.bind({})
Primary.args = {
  title: 'Physics',
  subTitle: 'Multiple Questions',
}
