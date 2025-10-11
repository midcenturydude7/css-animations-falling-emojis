import { random } from "lodash";

export const emojis = [
  {
    name: "party-popper",
    text: "🎉",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      marginTop: `${random(10, 20)}px`,
    },
  },
  {
    name: "thumbs-up",
    text: "👍",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      marginTop: `${random(0, 50)}px`,
    },
  },
  {
    name: "coffee-cup",
    text: "☕",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      marginTop: `${random(0, 20)}px`,
    },
  },
  {
    name: "party-favor",
    text: "🎊",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      marginTop: `${random(10, 70)}px`,
    },
  },
  {
    name: "clapping-hands",
    text: "👏",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      marginTop: `${random(0, 20)}px`,
    },
  },
  {
    name: "dollar-bills",
    text: "💵",
    style: {
      animationDuration: `${random(1200, 2200)}ms`,
      marginTop: `${random(0, 20)}px`,
    },
  },
];
