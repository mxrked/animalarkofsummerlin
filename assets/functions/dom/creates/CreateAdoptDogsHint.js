/**
 *
 *  This is used to create a hint for each adopt dogs section
 *
 *  @param {Array} dogsType - document.querySelectorsAll of all the dogs
 *  @param {string} holderElement - The ID for the element to place the hint
 *  @param {string} hintType - The element name for the hint
 *  @param {string} hintClass - The class name for the class added to the hint
 *  @param {string} hintText - The text for the hint
 *
 */

export function CreateAdoptDogsHint(
  dogsType,
  holderElement,
  hintType,
  hintClass,
  hintText
) {
  const HOLDER_ELEMENT = document.getElementById(holderElement);

  // If there ARE NO dogs
  if (dogsType.length === 0) {
    // Remove previous hints
    if (document.querySelector(".adopt-hint")) {
      HOLDER_ELEMENT.removeChild(document.querySelector(".adopt-hint"));
    }

    const HINT = document.createElement(hintType);
    HINT.classList.add(hintClass);
    HINT.classList.add("adopt-hint");
    HINT.classList.add("orientation-change-element");
    HINT.classList.add("half-second");
    HINT.innerText = hintText;

    HOLDER_ELEMENT.appendChild(HINT);
  }

  // If there ARE dogs
  if (dogsType.length !== 0) {
    // Remove previous hints
    if (document.querySelector(".adopt-hint")) {
      HOLDER_ELEMENT.removeChild(document.querySelector(".adopt-hint"));
    }
  }
}
