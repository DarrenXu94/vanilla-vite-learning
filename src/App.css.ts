import { createTheme, style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

const transitionBase = style({
  transition: "all 1s ease",
});

const hoverBase = styleVariants({
  redHover: {
    ":hover": {
      color: "red",
    },
  },
  greenHover: {
    ":hover": {
      color: "green",
    },
  },
});

export const exampleStyle = style([
  sprinkles({
    padding: {
      mobile: "small",
      desktop: "large",
    },
  }),
  hoverBase.redHover,
  transitionBase,
  {
    backgroundColor: vars.color.brand,
    fontFamily: vars.font.body,
    color: "white",
    // ":hover": {
    //   color: "red",
    // },
  },
]);
