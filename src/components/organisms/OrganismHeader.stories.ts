import OrganismHeader from './OrganismHeader.vue'

export default {
  title: 'Organisms/Header',
  component: OrganismHeader,
}

const Template = (args: any) => ({
  components: { OrganismHeader },
  setup() {
    return { args }
  },
  template: '<OrganismHeader v-bind="args"/>',
})

export const Primary: any = Template.bind({})
