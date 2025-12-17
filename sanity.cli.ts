import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'xtbgrgsg',
    dataset: 'production'
  },
  vite: (config) => {
    // Remove any Tailwind plugins from Sanity Studio build
    if (config.plugins) {
      config.plugins = config.plugins.filter((plugin: any) => {
        return !(plugin && typeof plugin === 'object' && plugin.name && plugin.name.includes('tailwind'))
      })
    }
    return config
  }
})
