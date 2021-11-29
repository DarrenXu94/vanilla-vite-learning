import { createTheme, style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

export const exampleStyle = style([
  sprinkles({
    padding: {
      mobile: "small",
      desktop: "large",
    },
  }),
  {
    backgroundColor: vars.color.brand,
    fontFamily: vars.font.body,
    color: "white",
  },
]);
