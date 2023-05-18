import { IThisFPSWebPartClass } from "@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/IThisFPSWebPartClass";

import { IFpsSlickSectionsWebPartProps } from "../IFpsSlickSectionsWebPartProps";
import { IPerformanceOp, check4This } from "../fpsReferences";
import { startPerformOpV2, updatePerformanceEndV2 } from "@mikezimm/fps-library-v2/lib/components/molecules/Performance/functions";
import { IStartPerformOp } from "@mikezimm/fps-library-v2/lib/components/molecules/Performance/IPerformanceSettings";

import styles from '../components/FpsSlickSections.module.scss';
import { addCanvasBGImageComponent } from "@mikezimm/fps-library-v2/lib/components/molecules/FullPageBackGround/addCanvasBGImageComponent";
import { updateSectionCSS } from "./updateSectionCSS";
import { forceWebpartWhiteText } from "@mikezimm/fps-library-v2/lib/components/molecules/FullPageBackGround/forceWebpartWhiteText";
// import { IFPSFullPageImageFit } from "../PropPaneGroups/FPSSlickBackgroundGroup";

// require ('./quickLaunchStyles.css');

export function updateSectionStyles (  op: string, thisWPClass: IThisFPSWebPartClass ): IPerformanceOp  {
  const performanceSettings: IStartPerformOp = {  label: op, updateMiliseconds: true, includeMsStr: true, op: op  } as IStartPerformOp;
  let performanceOp = startPerformOpV2( performanceSettings );

  let updates: number = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const webPartProps: any = thisWPClass.properties as IFpsSlickSectionsWebPartProps;

  // updates = setQuickLaunchTransp( webPartProps, updates );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const divs: any[] = Array.from( document.querySelectorAll('.CanvasZone'));
  console.log( "CanvasZone.length: ", divs.length );

  const hasFullCanvasBG = webPartProps.fullPageImage ? true : false;

  divs.map( ( thisDiv, sectionNo ) => {

    const sectionEnabled = webPartProps[ `sectEnable${ sectionNo + 1 }` ] === true ? true : false;

    if ( sectionEnabled === true || hasFullCanvasBG === true ) {

      if ( sectionEnabled ) updates = addSectionImage( webPartProps, sectionNo, thisDiv, updates );

      if ( sectionEnabled ) updates = addSectionStyles( webPartProps, sectionNo, thisDiv, updates )
      else if ( hasFullCanvasBG === true ) {
        updateSectionCSS( thisDiv, `backgroundColor`, `transparent` );
        updates ++;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const thisWPClassAny: any = thisWPClass;

      if ( sectionEnabled ) updates = addWebPartBackground( webPartProps, sectionNo, thisDiv, updates, thisWPClassAny.context );

      if ( sectionEnabled ) updates = addWebPartPadding( webPartProps, sectionNo, thisDiv, updates );

      if ( sectionEnabled || webPartProps.defaultWhiteText ) updates = forceWhiteText( webPartProps, sectionNo, thisDiv, updates );

    }

  });

  updates = addCanvasBGImageComponent( webPartProps, updates );

  performanceOp = updatePerformanceEndV2( { op: performanceOp, updateMiliseconds: true, count: updates });

  return performanceOp;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addWebPartBackground( webPartProps: any, sectionNo: number, CanvasZone: Element, updates: number, context: any ): number {

  // Added check if sectionNo < 0 it will always add the default
  const WPBG = sectionNo > -1 && webPartProps[ `sectWPBack${ sectionNo + 1 }` ] ? webPartProps[ `sectWPBack${ sectionNo + 1 }` ] : 
  webPartProps.defaultWPBack ? webPartProps.defaultWPBack : ``;

  if ( WPBG ) { 

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const webparts: any[] = Array.from( CanvasZone.querySelectorAll('.ControlZone'));
    console.log( "CanvasControls.length: ", webparts.length );

    webparts.map( ( thisWP, wpNumb ) => {

      // Added check if !context it will always assume it's not the current web part
      const isCurrentWebPart = context && context._instanceId === thisWP.id ? true : false;

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

  // Added due to https://github.com/mikezimm/Slick-Sections/issues/51
  const defaultWhiteText : boolean = check4This(`defaultFontColor=default` ) === true ? false : check4This(`defaultFontColor=white`) === true ? true :  webPartProps.defaultWhiteText;

  const WPWhite = webPartProps[ `sectForceWhite${ sectionNo + 1 }` ] === true || defaultWhiteText === true ? true : false;

  if ( WPWhite ) { updates = forceWebpartWhiteText( CanvasZone, updates ); }

  return updates;

}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function setQuickLaunchTransp( webPartProps: any, updates: number ) : number {

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const testEle: any = document.getElementById('spLeftNav');

//   if ( testEle ) {
//     testEle.classList.add( 'forceQuickTransp' );
//     updates ++;
//     // Added due to https://github.com/mikezimm/Slick-Sections/issues/51
//     const defaultWhiteText : boolean = check4This( `defaultFontColor=default` ) === true ? false : check4This( `defaultFontColor=white` ) === true ? true :  webPartProps.defaultWhiteText;
//     if ( defaultWhiteText === true ) {
//       testEle.classList.add( 'forceWhiteText' );
//     } else {
//       testEle.classList.remove( 'forceWhiteText' );
//     }
//     updates ++;
//   }
//   return updates;

// }
