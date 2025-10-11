import { random, range } from "lodash";
import { emojis } from "./emojis";

const emojiWrapper = document.querySelector(".emojiWrapper");

// Create emoji elements using map
const emojiElements = emojis.map(() => {
  const randomEmoji = emojis[random(0, emojis.length - 1)];
  const emojiElement = document.createElement("div");

  emojiElement.classList.add("emoji");
  emojiElement.textContent = randomEmoji.text;
  emojiElement.style.animationDuration = randomEmoji.style.animationDuration;
  emojiElement.style.animationDelay = randomEmoji.style.animationDelay || "0ms";

  return emojiElement;
});

// Append all emoji elements to the wrapper and use the range function to increase the number of emojis
range(5).forEach(() => {
  const randomElement = emojiElements[random(0, emojiElements.length - 1)];
  emojiWrapper.appendChild(randomElement);
});
