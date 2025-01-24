/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

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
        }
      },
    },
  },
})
