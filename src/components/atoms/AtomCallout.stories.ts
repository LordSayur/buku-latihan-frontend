import AtomCallout from './AtomCallout.vue'

export default {
  title: 'Atoms/Callout',
  component: AtomCallout,
}

const Template = (args: any) => ({
  components: { AtomCallout },
  setup() {
    return { args }
  },
  template:
    '<AtomCallout v-bind="args">Press ➡ or ⬅ to select answer and press enter to submit</AtomCallout>',
})

export const Primary: any = Template.bind({})
Primary.args = {
  subjectId: 1,
}

Primary.slots = {
  default: 'hello',
}
