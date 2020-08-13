import Typography from "typography"
import lincolnTheme from 'typography-theme-lincoln'

const typography = new Typography(lincolnTheme)

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


export const { scale, rhythm, options } = typography
export default typography
