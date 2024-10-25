export function dragElement(element) {
  let mousePos = { x: 0, y: 0 };
  let dragElement = undefined;
  if (element.children.length > 1) {
    // if present, the header is where you move the DIV from:
    dragElement = element.children[0];
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    dragElement = element;
  }
  dragElement.addEventListener('mousedown', dragMouseDown);

  let rect = dragElement.getBoundingClientRect();
  element.style.left = rect.x + 'px';
  element.style.top = rect.y + 'px';
  element.style.transform = 'none';

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    document.addEventListener('mouseup', closeDragElement);
    // call a function whenever the cursor moves:
    document.addEventListener('mousemove', elementDrag);
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // set the element's new position:

    let top = element.offsetTop - mousePos.y + e.clientY;
    let left = element.offsetLeft - mousePos.x + e.clientX;

    element.style.top = Math.min(Math.max(0, top), window.innerHeight - 26) + 'px';
    element.style.left = Math.min(Math.max(0, left), window.innerWidth - 26) + 'px';
    // set the new cursor position:
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', elementDrag);
  }

  return () => {
    dragElement.removeEventListener('mousedown', dragMouseDown);
  };
}
