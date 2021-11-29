import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonColors = styleVariants({
  neutral: { background: "whitesmoke" },
  brand: { background: "blueviolet" },
  accent: { background: "slateblue" },
});

export const button = recipe({
  base: {
    borderRadius: 6,
  },

  variants: {
    color: buttonColors,
    size: {
      small: { padding: 12 },
      medium: { padding: 16 },
      large: { padding: 24 },
    },
    rounded: {
      true: { borderRadius: 999 },
    },
  },

  // Applied when multiple variants are set at once
  compoundVariants: [
    {
      variants: {
        color: "neutral",
        size: "large",
      },
      style: {
        background: "ghostwhite",
      },
    },
  ],

  defaultVariants: {
    color: "accent",
    size: "medium",
  },
});
