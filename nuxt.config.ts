const path = require('path')

function resolve(_path: string) {
    return path.resolve(__dirname, _path);
}

const pathSrc = path.resolve(__dirname, 'src')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devServer: {
      host: '0.0.0.0'
  },

  devtools: { enabled: true },

  alias: {
      "public": resolve("public"),
      "@src": resolve("src"),
      "@comp": resolve("components"),
  },

  compatibilityDate: '2024-07-31'
})