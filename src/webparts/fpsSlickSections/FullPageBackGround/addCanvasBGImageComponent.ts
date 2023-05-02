import { check4This } from "../fpsReferences";
// import styles from '../components/FpsSlickSections.module.scss';

require( './forceWhiteText.css' );
require( './fullPageBackground.css' );

import { IFPSFullPageImageFit, IFPSPageBGWPProps } from "../IFPSPageBGWPProps";

export function addCanvasBGImageComponent(webPartProps: IFPSPageBGWPProps, updates: number): number {

  // Added due to https://github.com/mikezimm/Slick-Sections/issues/51
  const defaultWhiteText: boolean = check4This(`defaultNormalColor=true`) === true ? false : webPartProps.defaultWhiteText;

  let fullPageImageFit: IFPSFullPageImageFit = webPartProps.fullPageImageFit;
  if (check4This(`fullPageFit=Original`) === true) { fullPageImageFit = `Original`; }
  else if (check4This(`fullPageFit=Layout2`) === true) { fullPageImageFit = `Layout2`; }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let slickCanvasBG: any[] = Array.from(document.getElementsByClassName(`slickSectionCanvasBG`));
  if (slickCanvasBG.length === 0)
    slickCanvasBG = Array.from(document.getElementsByClassName(`slickSectionCanvasBG2`));

  if (!webPartProps.fullPageImage) {
    // if the fps canvas element exists already, just remove the visibleSlickSection className and return
    if (slickCanvasBG.length > 0) {
      slickCanvasBG[0].classList.remove(`visibleSlickSection`);
    }

    return updates;

  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const divsCanvas: any[] = Array.from(document.getElementsByClassName(`CanvasComponent`));

  if (divsCanvas.length === 0) {
    // If there are no CanvasComponent elements, then I don't have an element to prepend the background to
    console.log(`FPS Slick Sections addPreCanvasComponent - NO CanvasComponent found`);
    return updates;
  }

  const fullPageImageFilter = webPartProps.fullPageImageFilter ? `style= "filter:${webPartProps.fullPageImageFilter}"` : ``;
  const canvasClass = fullPageImageFit === 'Layout2' ? `slickSectionCanvasBG2` : `slickSectionCanvasBG`;
  const imgClass = fullPageImageFit === 'Layout2' ? `slickSectionCanvasBGImg2` : `slickSectionCanvasBGImg`;
  // https://github.com/mikezimm/Slick-Sections/issues/40
  const divHTML = `<div class="${canvasClass}">
    <img class="${imgClass}" src="${webPartProps.fullPageImage}" ${fullPageImageFilter}>
    <div class="${`slickSectionCanvasBGOverlay`}" style="
        background: ${webPartProps.fullPageOverlayColor};
        opacity: ${webPartProps.fullPageOverlayOpacity};
    "></div>
  </div>`;



  if (slickCanvasBG.length > 0) {

    // If slickCanvasBG already exists, add the visible class
    slickCanvasBG[0].classList.add(`visibleSlickSection`);

    // Then update the src
    const img = slickCanvasBG[0].getElementsByClassName(`slickSectionCanvasBGImg`);
    if (img && img.src !== webPartProps.fullPageImage)
      img.src = webPartProps.fullPageImage;
    updates++;

  } else {

    const tempDiv = document.createElement("div");

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
    divsCanvas[0].insertAdjacentElement("beforebegin", tempDiv);

    tempDiv.outerHTML = divHTML;

    tempDiv.classList.add(`visibleSlickSection`);

    updates++;
  }

  // Only apply white to command bar if there is an image && you force white default
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cmdBar: any[] = Array.from(document.getElementsByClassName(`mainContent`));
  if (cmdBar && cmdBar.length > 0) {
    if (defaultWhiteText === true) {
      cmdBar[0].classList.add(`forceWhiteTextCmdButton`);
    } else {
      cmdBar[0].classList.remove(`forceWhiteTextCmdButton`);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const siteHeader: any = document.querySelector(`[data-automationid="SiteHeader"]`);
  if (siteHeader) {
    if (defaultWhiteText === true) {
      siteHeader.classList.add(`forceWhiteTextSiteHeader`);
    } else {
      siteHeader.classList.remove(`forceWhiteTextSiteHeader`);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageHeader: any = document.querySelector(`[data-automation-id="pageHeader"]`);
  if (pageHeader) {
    if (defaultWhiteText === true) {
      pageHeader.classList.add(`forceWhiteTextPageHeader`);
    } else {
      pageHeader.classList.remove(`forceWhiteTextPageHeader`);
    }
  }


  return updates;
}
