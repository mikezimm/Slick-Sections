import { IThisFPSWebPartClass } from "@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/IThisFPSWebPartClass";
import { findParentElementLikeThis } from "@mikezimm/fps-library-v2/lib/logic/DOM/Search/domSearch";

import { IFpsSlickSectionsWebPartProps } from "../IFpsSlickSectionsWebPartProps";
import { IPerformanceOp } from "../fpsReferences";
import { startPerformOpV2, updatePerformanceEndV2 } from "@mikezimm/fps-library-v2/lib/components/molecules/Performance/functions";
import { IStartPerformOp } from "@mikezimm/fps-library-v2/lib/components/molecules/Performance/IPerformanceSettings";

import styles from '../components/FpsSlickSections.module.scss';

export function updateSectionStyles (  op: string, thisWPClass: IThisFPSWebPartClass ): IPerformanceOp  {
  const performanceSettings: IStartPerformOp = {  label: op, updateMiliseconds: true, includeMsStr: true, op: op  } as IStartPerformOp;
  let performanceOp = startPerformOpV2( performanceSettings );

  let updates: number = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webPartProps: any = thisWPClass.properties as IFpsSlickSectionsWebPartProps;

  // This will hide the current web part
  // if ( thisWPClass.displayMode === DisplayMode.Read ) {
  //   const thisControlZone = findParentElementLikeThis( thisWPClass.domElement, 'classList', 'ControlZone--control', 10 , 'contains', false, true );
  //   if ( thisControlZone ) updateSectionCSS( thisControlZone.parentElement, `display`, `none` );
  // }

  // const divs: any[] = Array.from( document.querySelectorAll('[data-automation-id="CanvasSection"]'));
  const divs: any[] = Array.from( document.querySelectorAll('.CanvasZone'));
  console.log( "CanvasZone.length: ", divs.length );

  const hasFullCanvasBG = webPartProps.fullPageImage ? true : false;

  divs.map( ( thisDiv, sectionNo ) => {

    const sectionEnabled = webPartProps[ `sectEnable${ sectionNo + 1 }` ] === true ? true : false;

    if ( sectionEnabled === true || hasFullCanvasBG === true ) {

      if ( sectionEnabled ) updates = addSectionImage( webPartProps, sectionNo, thisDiv, updates );

      // const originalBgImage = webPartProps[ `sectBgImage${ sectionNo + 1 }` ];
      // if ( originalBgImage ) { 

      //   thisDiv.classList.add( styles.baseSlickBackground );
      //   if ( sectionNo > 0 ) thisDiv.classList.add( styles.targetedSlickSection );

      //   const imageProp = originalBgImage.indexOf( 'http' ) === 0 ? `url("${originalBgImage}")` : originalBgImage;
      //   updateSectionCSS( thisDiv, `backgroundImage`, imageProp );
      //   // updateSectionCSS( thisDiv, `backgroundPosition`, `center` );
      //   // updateSectionCSS( thisDiv, `backgroundRepeat`, `no-repeat` );
      //   // updateSectionCSS( thisDiv, `backgroundSize`, `cover` );
      //   // updateSectionCSS( thisDiv, `backgroundPosition`, `relative` );
      //   updates += 5;
      // }

      if ( sectionEnabled ) updates = addSectionStyles( webPartProps, sectionNo, thisDiv, updates )
      else if ( hasFullCanvasBG === true ) {
        updateSectionCSS( thisDiv, `backgroundColor`, `transparent` );
        updates ++;
      }

      // if ( webPartProps[ `sectBgColor${ sectionNo + 1 }` ] ) { 
      //   updateSectionCSS( thisDiv, `backgroundColor`, webPartProps[ `sectBgColor${ sectionNo + 1 }` ] );
      //   updates ++;
      // }
      // if ( webPartProps[ `sectHeight${ sectionNo + 1 }` ] ) {
      //   updateSectionCSS( thisDiv, `minHeight`, webPartProps[ `sectHeight${ sectionNo + 1 }` ] );
      //   updates ++;
      // }
      // if ( webPartProps[ `sectOpacity${ sectionNo + 1 }` ] ) { 
      //   updateSectionCSS( thisDiv, `opacity`, webPartProps[ `sectOpacity${ sectionNo + 1 }` ] );
      //   updates ++;
      // }
      // if ( webPartProps[ `sectMargBot${ sectionNo + 1 }` ] ) { 
      //   updateSectionCSS( thisDiv, `marginBottom`, `${webPartProps[ `sectMargBot${ sectionNo + 1 }` ]}px` );
      //   updates ++;
      // }

      const thisWPClassAny: any = thisWPClass;

      if ( sectionEnabled ) updates = addWebPartBackground( webPartProps, sectionNo, thisDiv, updates, thisWPClassAny.context );

      // const WPBG = webPartProps[ `sectWPBack${ sectionNo + 1 }` ] ? webPartProps[ `sectWPBack${ sectionNo + 1 }` ] : 
      //   webPartProps.defaultWPBack ? webPartProps.defaultWPBack : ``;

      // if ( WPBG ) { 

      //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   const webparts: any[] = Array.from( thisDiv.querySelectorAll('.ControlZone'));
      //   console.log( "CanvasControls.length: ", webparts.length );

      //   webparts.map( ( thisWP, wpNumb ) => {

 
      //     const isCurrentWebPart = thisWPClassAny.context._instanceId === thisWP.id ? true : false;

      //     if ( isCurrentWebPart === true && thisWPClassAny.properties.enableTabs === false ) {
      //       // Added this to remove any padding and margin from this web part if tabs are not enabled
      //       // because background color will make padding visible if it is set on the web part props
      //       updateSectionCSS( thisWP, `padding`, '0px' );
      //       updateSectionCSS( thisWP, `margin`, '0px' );
      //       updates ++;

      //     } else {
      //       updateSectionCSS( thisWP, `background`, WPBG );
      //       updates ++;

      //     }
      //   });
      // }

      if ( sectionEnabled ) updates = addWebPartPadding( webPartProps, sectionNo, thisDiv, updates );

      // const WPPadding = webPartProps[ `sectWPPad${ sectionNo + 1 }` ] ? webPartProps[ `sectWPPad${ sectionNo + 1 }` ] : 
      //   webPartProps.defaultWPPad ? webPartProps.defaultWPPad : null;

      // if ( WPPadding ) { 

      //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   const webparts: any[] = Array.from( thisDiv.querySelectorAll('.ControlZone'));
      //   console.log( "CanvasControls.length: ", webparts.length );

      //   webparts.map( ( thisWP, wpNumb ) => {
      //     updateSectionCSS( thisWP, `padding`, `${WPPadding}px` );
      //     updates ++;

      //   });
      // }

      if ( sectionEnabled || webPartProps.defaultWhiteText ) updates = forceWhiteText( webPartProps, sectionNo, thisDiv, updates );
      // const WPWhite = webPartProps[ `sectForceWhite${ sectionNo + 1 }` ] === true ? true : false;

      // if ( WPWhite ) {

      //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   const webparts: any[] = Array.from( thisDiv.querySelectorAll('.ControlZone'));
      //   console.log( "CanvasControls.length: ", webparts.length );

      //   webparts.map( ( thisWP, wpNumb ) => {
      //     thisWP.classList.add( styles.forceWhiteText );
      //     updates ++;

      //   });
      // }

    }

  });

  updates = addPreCanvasComponent( webPartProps, updates );

  performanceOp = updatePerformanceEndV2( { op: performanceOp, updateMiliseconds: true, count: updates });

  return performanceOp;
}

export function addPreCanvasComponent( webPartProps: IFpsSlickSectionsWebPartProps, updates: number, ): number {

  if ( !webPartProps.fullPageImage ) { 
    // if the fps canvas element exists already, just remove the visibleSlickSection className and return
    const divs: any[] = Array.from( document.getElementsByClassName( `${styles.slickSectionCanvasBG}` ));
    if ( divs.length > 0 ) {
      divs[0].classList.remove( styles.visibleSlickSection );
    }

    return updates;

  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
  const divs: any[] = Array.from( document.getElementsByClassName( `CanvasComponent` ) );

  if ( divs.length === 0 ) {
    // If there are no CanvasComponent elements, then I don't have an element to prepend the background to
    console.log( `FPS Slick Sections addPreCanvasComponent - NO CanvasComponent found` );
    return updates;
  }

  const fullPageImageFilter = webPartProps.fullPageImageFilter ? `style= "filter:${webPartProps.fullPageImageFilter}"` : ``;
  // https://github.com/mikezimm/Slick-Sections/issues/40
  const divHTML = `<div class="${ styles.slickSectionCanvasBG }">
    <img class="${ styles.slickSectionCanvasBGImg }" src="${ webPartProps.fullPageImage }" ${fullPageImageFilter}>
    <div class="${ styles.slickSectionCanvasBGOverlay }" style="
        background: ${ webPartProps.fullPageOverlayColor };
        opacity: ${ webPartProps.fullPageOverlayOpacity };
    "></div>
  </div>`;


  const slickCanvasBG: any[] = Array.from( document.getElementsByClassName( styles.slickSectionCanvasBG ) );

  if ( slickCanvasBG.length > 0 ) {

    // If slickCanvasBG already exists, add the visible class
    slickCanvasBG[0].classList.add( styles.visibleSlickSection );

    // Then update the src
    const img = slickCanvasBG[0].getElementsByClassName( styles.slickSectionCanvasBGImg );
    if ( img && img.src !== webPartProps.fullPageImage ) img.src = webPartProps.fullPageImage;
    updates ++;

  } else {

    const tempDiv = document.createElement( "div" );

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
    divs[0].insertAdjacentElement( "beforebegin", tempDiv );

    tempDiv.outerHTML = divHTML;

    tempDiv.classList.add( styles.visibleSlickSection );

    updates ++;
  }

  //Only apply white to command bar if there is an image && you force white default
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cmdBar: any[] = Array.from( document.getElementsByClassName( `mainContent` ) );
  if ( cmdBar && cmdBar.length > 0 ) {
    if ( webPartProps.defaultWhiteText === true ) {
      cmdBar[0].classList.add( styles.forceWhiteTextCmdButton );
    } else {
      cmdBar[0].classList.remove( styles.forceWhiteTextCmdButton );
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const siteHeader: any = document.querySelector( `[data-automationid="SiteHeader"]` );
  if ( siteHeader ) {
    if ( webPartProps.defaultWhiteText === true ) {
      siteHeader.classList.add( styles.forceWhiteTextSiteHeader );
    } else {
      siteHeader.classList.remove( styles.forceWhiteTextSiteHeader );
    }
  }

  // data-automation-id="pageHeader"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageHeader: any = document.querySelector( `[data-automation-id="pageHeader"]` );
  if ( pageHeader ) {
    if ( webPartProps.defaultWhiteText === true ) {
      pageHeader.classList.add( styles.forceWhiteTextPageHeader );
    } else {
      pageHeader.classList.remove( styles.forceWhiteTextPageHeader );
    }
  }


  return updates;
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addWebPartBackground( webPartProps: any, sectionNo: number, CanvasZone: Element, updates: number, context: any ): number {

  const WPBG = webPartProps[ `sectWPBack${ sectionNo + 1 }` ] ? webPartProps[ `sectWPBack${ sectionNo + 1 }` ] : 
  webPartProps.defaultWPBack ? webPartProps.defaultWPBack : ``;

  if ( WPBG ) { 

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const webparts: any[] = Array.from( CanvasZone.querySelectorAll('.ControlZone'));
    console.log( "CanvasControls.length: ", webparts.length );

    webparts.map( ( thisWP, wpNumb ) => {

      const isCurrentWebPart = context._instanceId === thisWP.id ? true : false;

      if ( isCurrentWebPart === true && webPartProps.enableTabs === false ) {
        // Added this to remove any padding and margin from this web part if tabs are not enabled
        // because background color will make padding visible if it is set on the web part props
        updateSectionCSS( thisWP, `padding`, '0px' );
        updateSectionCSS( thisWP, `margin`, '0px' );
        updates ++;

      } else {
        updateSectionCSS( thisWP, `background`, WPBG );
        updates ++;

      }
    });
  }

  return updates;

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addSectionStyles( webPartProps: any, sectionNo: number, CanvasZone: Element, updates: number ): number {

  if ( webPartProps[ `sectBgColor${ sectionNo + 1 }` ] ) { 
    updateSectionCSS( CanvasZone, `backgroundColor`, webPartProps[ `sectBgColor${ sectionNo + 1 }` ] );
    updates ++;
  } else if ( webPartProps.fullPageImage ) {
    updateSectionCSS( CanvasZone, `backgroundColor`, `transparent` );
    updates ++;
  }
  if ( webPartProps[ `sectHeight${ sectionNo + 1 }` ] ) {
    updateSectionCSS( CanvasZone, `minHeight`, webPartProps[ `sectHeight${ sectionNo + 1 }` ] );
    updates ++;
  }
  if ( webPartProps[ `sectOpacity${ sectionNo + 1 }` ] ) { 
    updateSectionCSS( CanvasZone, `opacity`, webPartProps[ `sectOpacity${ sectionNo + 1 }` ] );
    updates ++;
  }
  if ( webPartProps[ `sectMargBot${ sectionNo + 1 }` ] ) { 
    updateSectionCSS( CanvasZone, `marginBottom`, `${webPartProps[ `sectMargBot${ sectionNo + 1 }` ]}px` );
    updates ++;

  }
  return updates;

}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addSectionImage( webPartProps: any, sectionNo: number, CanvasZone: Element, updates: number ): number {

  const originalBgImage = webPartProps[ `sectBgImage${ sectionNo + 1 }` ];
  if ( originalBgImage ) { 

    CanvasZone.classList.add( styles.baseSlickBackground );
    if ( sectionNo > 0 ) CanvasZone.classList.add( styles.targetedSlickSection );

    const imageProp = originalBgImage.indexOf( 'http' ) === 0 ? `url("${originalBgImage}")` : originalBgImage;
    updateSectionCSS( CanvasZone, `backgroundImage`, imageProp );
    // updateSectionCSS( thisDiv, `backgroundPosition`, `center` );
    // updateSectionCSS( thisDiv, `backgroundRepeat`, `no-repeat` );
    // updateSectionCSS( thisDiv, `backgroundSize`, `cover` );
    // updateSectionCSS( thisDiv, `backgroundPosition`, `relative` );
    updates += 5;
  }

  return updates;

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addWebPartPadding( webPartProps: any, sectionNo: number, CanvasZone: Element, updates: number ): number {

  const WPPadding = webPartProps[ `sectWPPad${ sectionNo + 1 }` ] ? webPartProps[ `sectWPPad${ sectionNo + 1 }` ] : 
  webPartProps.defaultWPPad ? webPartProps.defaultWPPad : null;

  if ( WPPadding ) { 

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const webparts: any[] = Array.from( CanvasZone.querySelectorAll('.ControlZone'));
    console.log( "CanvasControls.length: ", webparts.length );

    webparts.map( ( thisWP, wpNumb ) => {
      updateSectionCSS( thisWP, `padding`, `${WPPadding}px` );
      updates ++;

    });
  }

  return updates;

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function forceWhiteText( webPartProps: any, sectionNo: number, CanvasZone: Element, updates: number ): number {

  const WPWhite = webPartProps[ `sectForceWhite${ sectionNo + 1 }` ] === true || webPartProps.defaultWhiteText === true ? true : false;

  if ( WPWhite ) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const webparts: any[] = Array.from( CanvasZone.querySelectorAll('.ControlZone'));
    console.log( "CanvasControls.length: ", webparts.length );

    webparts.map( ( thisWP, wpNumb ) => {
      thisWP.classList.add( styles.forceWhiteText );
      updates ++;

    });
  }

  return updates;

}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateSectionCSS( thisDiv: any, prop: string, value: string ) : void {

  if ( thisDiv.style ){
    thisDiv.style[ prop ] = value;
  } else {
    thisDiv.style = { };
    thisDiv.style[ prop ] = value;

  }
}

export function getSectionCount(): number {
  const divs: any[] = Array.from( document.querySelectorAll('.CanvasZone'));
  return divs.length;
}