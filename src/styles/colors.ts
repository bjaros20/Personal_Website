import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
} from "@radix-ui/colors"

export type Colors = typeof colors.light & typeof colors.dark

export const colors = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
    background: "#ffffff", //white background
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    background: "f0f0f0", //light gray background
  },
}
