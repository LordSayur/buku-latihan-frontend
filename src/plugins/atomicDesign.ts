export default {
  install: (app: any, option: any) => {
    const atoms = import.meta.globEager('../components/atoms/*.vue')
    const molecules = import.meta.globEager('../components/molecules/*.vue')
    const organisms = import.meta.globEager('../components/organisms/*.vue')

    Object.entries({ ...atoms, ...molecules, ...organisms }).forEach(
      ([path, definition]) => {
        const componentName: string | undefined = path
          .split('/')
          .pop()
          ?.replace(/\.\w+$/, '')

        if (!componentName) return

        app.component(componentName, definition.default)
      }
    )
  },
}
