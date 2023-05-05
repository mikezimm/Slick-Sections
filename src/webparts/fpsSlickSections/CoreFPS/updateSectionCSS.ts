
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateSectionCSS(thisDiv: any, prop: string, value: string): void {

  if (thisDiv.style) {
    thisDiv.style[prop] = value;
  } else {
    thisDiv.style = {};
    thisDiv.style[prop] = value;
  }
}

export function getSectionCount(): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const divs: any[] = Array.from(document.querySelectorAll('.CanvasZone'));
  return divs.length;
}
