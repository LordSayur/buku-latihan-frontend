import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders the hello world', () => {
    mount(HelloWorld, { propData: { msg: 'Hello Vue 3 + Typescript + Vite' } })
    cy.contains('Hello Vue 3 + Typescript + Vite').should('be.visible')
  })
})
