import { random } from "lodash";

export const emojis = [
  {
    name: "party-popper",
    text: "🎉",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      animationDelay: `${random(0, 500)}ms`,
      marginTop: `${random(10, 20)}px`,
    },
  },
  {
    name: "thumbs-up",
    text: "👍",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      animationDelay: `${random(0, 500)}ms`,
    },
  },
  {
    name: "coffee-cup",
    text: "☕",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      animationDelay: `${random(0, 500)}ms`,
    },
  },
  {
    name: "party-favor",
    text: "🎊",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      animationDelay: `${random(0, 500)}ms`,
    },
  },
  {
    name: "clapping-hands",
    text: "👏",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      animationDelay: `${random(0, 500)}ms`,
    },
  },
  {
    name: "dollar-bills",
    text: "💵",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      animationDelay: `${random(0, 500)}ms`,
    },
  },
];
