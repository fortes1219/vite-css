import "./style.scss";
import setRootFontSize from "./rem.js";

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

document.addEventListener("DOMContentLoaded", () =>
  setRootFontSize(document, window)
);

const debouncedSetRootFontSize = debounce(
  () => setRootFontSize(document, window),
  10
);
window.addEventListener("resize", debouncedSetRootFontSize);
window.addEventListener("orientationchange", debouncedSetRootFontSize);
