/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'
import { aliases, md } from 'vuetify/iconsets/md'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        colors: {
          'red-accent-2': colors.red.accent2, 
          'red-lighten-2': colors.red.lighten2,
          white: colors.shades.white,
          'red-accent-1': colors.red.accent1,
          'deep-orange-lighten-2': colors.deepOrange.lighten1,
          'blue-lighten-2': colors.blue.lighten2,
          'blue-darken-4': colors.blue.darken4,
          'light-green-lighten-2': colors.green.lighten2
        }
      },
    },
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})
