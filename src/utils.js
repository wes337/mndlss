export function getRandomInt(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);

  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

export function eventTargetInsideButtonOrATag(event) {
  let targetElement = event.target;

  while (targetElement != null) {
    if (
      targetElement.nodeName.toLowerCase() === "button" ||
      targetElement.nodeName.toLowerCase() === "a"
    ) {
      return true;
    }

    targetElement = targetElement.parentNode;
  }

  return false;
}
