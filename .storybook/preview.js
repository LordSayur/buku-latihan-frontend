import { app } from '@storybook/vue3'
import '../src/index.css'

const requireComponent = require.context('../src/components', true, /\.vue$/)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)

  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.vue$/, '')

  app.component(componentName, componentConfig.default || componentConfig)
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
