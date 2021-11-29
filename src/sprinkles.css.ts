import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "block", "flex"],
    flexDirection: ["row", "column"],
    padding: space,
    // etc.
  },
});
export const sprinkles = createSprinkles(responsiveProperties);
