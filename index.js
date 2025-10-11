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
  emojiElement.style.marginTop = randomEmoji.style.marginTop;

  return emojiElement;
});

// Append all emoji elements to the wrapper
emojiElements.forEach((element) => emojiWrapper.appendChild(element));
