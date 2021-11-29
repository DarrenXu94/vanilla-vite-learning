import React from "react";
import { button, buttonColors } from "./myButton.css";
// import * as styles from "./myButton.css"

export interface MyButtonProps {
  //   color: "neutral" | "brand" | "accent";
  color?: keyof typeof buttonColors;
}

export default function MyButton({ color }: MyButtonProps) {
  return (
    <button
      className={button({
        color: color,
        size: "large",
        rounded: true,
      })}
    >
      Hello world
    </button>
  );
}
