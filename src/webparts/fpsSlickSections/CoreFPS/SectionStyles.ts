import { IThisFPSWebPartClass } from "@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/IThisFPSWebPartClass";
import { findParentElementLikeThis } from "@mikezimm/fps-library-v2/lib/logic/DOM/Search/domSearch";

import { IFpsSlickSectionsWebPartProps } from "../IFpsSlickSectionsWebPartProps";
import { DisplayMode } from "@microsoft/sp-core-library";
import { IPerformanceOp } from "../fpsReferences";
import { startPerformOpV2, updatePerformanceEndV2 } from "@mikezimm/fps-library-v2/lib/components/molecules/Performance/functions";
import { IStartPerformOp } from "@mikezimm/fps-library-v2/lib/components/molecules/Performance/IPerformanceSettings";

import styles from '../components/FpsSlickSections.module.scss';

export function updateSectionStyles (  op: string, thisWPClass: IThisFPSWebPartClass ): IPerformanceOp  {
  const performanceSettings: IStartPerformOp = {  label: op, updateMiliseconds: true, includeMsStr: true, op: op  } as IStartPerformOp;
  let performanceOp = startPerformOpV2( performanceSettings );

  let udpates: number = 0;

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

  divs.map( ( thisDiv, sectionNo ) => {

    if ( webPartProps[ `sectEnable${ sectionNo + 1 }` ] === true ) {
      const originalBgImage = webPartProps[ `sectBgImage${ sectionNo + 1 }` ];
      if ( originalBgImage ) { 

        thisDiv.classList.add( styles.baseSlickBackground );
        if ( sectionNo > 0 ) thisDiv.classList.add( styles.targetedSlickSection );

        const imageProp = originalBgImage.indexOf( 'http' ) === 0 ? `url("${originalBgImage}")` : originalBgImage;
        updateSectionCSS( thisDiv, `backgroundImage`, imageProp );
        // updateSectionCSS( thisDiv, `backgroundPosition`, `center` );
        // updateSectionCSS( thisDiv, `backgroundRepeat`, `no-repeat` );
        // updateSectionCSS( thisDiv, `backgroundSize`, `cover` );
        // updateSectionCSS( thisDiv, `backgroundPosition`, `relative` );
        udpates += 5;
      }
      if ( webPartProps[ `sectBgColor${ sectionNo + 1 }` ] ) { 
        updateSectionCSS( thisDiv, `backgroundColor`, webPartProps[ `sectBgColor${ sectionNo + 1 }` ] );
        udpates ++;
      }
      if ( webPartProps[ `sectHeight${ sectionNo + 1 }` ] ) {
        updateSectionCSS( thisDiv, `minHeight`, webPartProps[ `sectHeight${ sectionNo + 1 }` ] );
        udpates ++;
      }
      if ( webPartProps[ `sectOpacity${ sectionNo + 1 }` ] ) { 
        updateSectionCSS( thisDiv, `opacity`, webPartProps[ `sectOpacity${ sectionNo + 1 }` ] );
        udpates ++;
      }
      if ( webPartProps[ `sectMargBot${ sectionNo + 1 }` ] ) { 
        updateSectionCSS( thisDiv, `marginBottom`, `${webPartProps[ `sectMargBot${ sectionNo + 1 }` ]}px` );
        udpates ++;
      }

      if ( webPartProps[ `sectWPBack${ sectionNo + 1 }` ] ) { 

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const webparts: any[] = Array.from( thisDiv.querySelectorAll('.ControlZone'));
        console.log( "CanvasControls.length: ", webparts.length );

        webparts.map( ( thisWP, wpNumb ) => {
          updateSectionCSS( thisWP, `background`, webPartProps[ `sectWPBack${ sectionNo + 1 }` ] );
          udpates ++;

        });
      }

    }

  });

  performanceOp = updatePerformanceEndV2( { op: performanceOp, updateMiliseconds: true, count: udpates });

  return performanceOp;
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