import OrganismNavBar from './OrganismNavBar.vue'

export default {
  title: 'Organisms/NavBar',
  component: OrganismNavBar,
}

const Template = (args: any) => ({
  components: { OrganismNavBar },
  setup() {
    return { args }
  },
  template: '<OrganismNavBar v-bind="args"/>',
})

export const Primary: any = Template.bind({})
