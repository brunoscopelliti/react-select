import { useEffect } from "react";

/**
 * @name scrollIntoView
 * @param {HTMLElement} parentEl
 * @param {HTMLElement} childEl
 */
function scrollIntoView (parentEl, childEl) {
  const childOffsetTop = childEl.offsetTop + childEl.offsetHeight;
  const scroll = parentEl.clientHeight + parentEl.scrollTop;
  if (childOffsetTop > scroll) {
    parentEl.scrollTop = childOffsetTop - parentEl.clientHeight;
  } else if (childEl.offsetTop < parentEl.scrollTop) {
    parentEl.scrollTop = childEl.offsetTop;
  }
}

/**
 * @name useScrollSelectedIntoView
 * @param {HTMLElement} parentEl
 */
function useScrollSelectedIntoView (parentEl) {
  useEffect(
    function () {
      /**
       * @type HTMLElement
       */
      const childEl = parentEl?.querySelector("[aria-selected]");
      if (childEl && parentEl.scrollHeight > parentEl.clientHeight) {
        scrollIntoView(parentEl, childEl);
      }
    }
  );
}

export default useScrollSelectedIntoView;
