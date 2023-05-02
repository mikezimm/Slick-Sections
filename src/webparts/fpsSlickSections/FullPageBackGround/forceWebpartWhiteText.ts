
require( './forceWhiteText.css' );

export function forceWebpartWhiteText(CanvasZone: Element, updates: number): number {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webparts: any[] = Array.from(CanvasZone.querySelectorAll('.ControlZone'));
  console.log("CanvasControls.length: ", webparts.length);

  webparts.map((thisWP, wpNumb) => {
    thisWP.classList.add('forceWhiteText');
    updates++;

  });

  return updates;

}
