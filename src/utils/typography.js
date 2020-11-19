import Typography from 'typography'
import grandViewTheme from 'typography-theme-grand-view'

const typography = new Typography(grandViewTheme)


export const { scale, rhythm, options } = typography
export default typography

/*
const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
})
*/