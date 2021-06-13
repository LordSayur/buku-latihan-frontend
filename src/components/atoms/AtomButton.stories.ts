import AtomButton from './AtomButton.vue'

export default {
  title: 'Atoms/Button',
  component: AtomButton,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    type: {
      control: { type: 'select', options: ['primary', 'secondary'] },
    },
  },
}

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { AtomButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<AtomButton v-bind="args">Button</AtomButton>',
})

export const Primary: any = Template.bind({})
Primary.args = {}

export const Secondary: any = Template.bind({})
Secondary.args = {
  type: 'secondary',
}

export const Large: any = Template.bind({})
Large.args = {
  size: 'large',
}

export const Small: any = Template.bind({})
Small.args = {
  size: 'small',
}
