
/***
 * NOTE:  All imports in here Must be imported directly from fps-library-v2, not the fpsPreferences
 * Or else it will get into an endless loop because these values are imported into fpsPreferences
 * 
 */
import { IMinWPBannerProps } from '@mikezimm/fps-library-v2/lib/banner/interfaces/MinWP/IMinWPBannerProps';
import { ISlickButtonShape } from './components/IFpsSlickSectionsProps';
import { changeFullBackground, IFPSPageBGWPProps } from './IFPSPageBGWPProps';

export const changeSlickCommon : string[] = [ `defaultSection`, `defaultWPBack`, `defaultWPPad`, `scrollBehavior`, 
  `enableTabs`, `buttonShape`, `buttonStyle`, `buttonBgColor`,  ];

function createChangeSections(numb: number ) : string[] {
  return [ `sectEnable${numb}`, `sectButton${numb}`, `sectBgImage${numb}`, `sectBgColor${numb}`, `sectHeight${numb}`, `sectOpacity${numb}`, `sectMargBot${numb}`, `sectWPBack${numb}`, 
  `sectWPPad${numb}`, `sectForceWhite${numb}` ];
}

export const changeSection1 : string[] = createChangeSections(1);
export const changeSection2 : string[] = createChangeSections(2);
export const changeSection3 : string[] = createChangeSections(3);
export const changeSection4 : string[] = createChangeSections(4);
export const changeSection5 : string[] = createChangeSections(5);

 /**
  For props to export to panel but NOT save in analytics
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WebPartAnalyticsChanges : any = {
  Background: changeFullBackground,
  SlickCommon: changeSlickCommon,
  Section1: changeSection1,
  Section2: changeSection2,
  Section3: changeSection3,
  Section4: changeSection4,
  Section5: changeSection5,
}


 /**
 * These are properties to export BOTH to analytics AND the panel
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WebPartPanelChanges : any = {

}

//Specific for this web part
export const exportIgnorePropsWP : string[] = [ ];


//These props will not be imported even if they are in one of the change arrays above (fail-safe)
//This was done so user could not manually insert specific props to over-right fail-safes built in to the webpart

//Specific for this web part
export const importBlockPropsWP : string[] = [ 'showSomeProps' ];

// export interface IFpsSlickSectionsWebPartProps extends IMinWPBannerProps {
  /**
   * Extend with portions of FPS Props that are needed
   * 
   */
export interface IFpsSlickSectionsWebPartProps extends IFPSPageBGWPProps, IMinWPBannerProps {

  description: string;

  defaultSection: string;
  defaultWPBack: string;
  defaultWPPad: number;
  scrollBehavior: ScrollBehavior;  // NOT ENABLED YET.
  enableTabs: boolean;
  buttonShape: ISlickButtonShape;
  buttonStyle: string;
  buttonBgColor: string;

  sectEnable1: boolean;
  sectButton1: string;
  sectBgImage1: string;
  sectBgColor1: string;
  sectHeight1: string;
  sectOpacity1: number;
  sectMargBot1: number;
  sectWPBack1: string;
  sectForceWhite1: string;
  sectWPPad1: string;

  sectEnable2: boolean;
  sectButton2: string;
  sectBgImage2: string;
  sectBgColor2: string;
  sectHeight2: string;
  sectOpacity2: number;
  sectMargBot2: number;
  sectWPBack2: string;
  sectForceWhite2: string;
  sectWPPad2: string;

  sectEnable3: boolean;
  sectButton3: string;
  sectBgImage3: string;
  sectBgColor3: string;
  sectHeight3: string;
  sectOpacity3: number;
  sectMargBot3: number;
  sectWPBack3: string;
  sectForceWhite3: string;
  sectWPPad3: string;

  sectEnable4: boolean;
  sectButton4: string;
  sectBgImage4: string;
  sectBgColor4: string;
  sectHeight4: string;
  sectOpacity4: number;
  sectMargBot4: number;
  sectWPBack4: string;
  sectForceWhite4: string;
  sectWPPad4: string;

  sectEnable5: boolean;
  sectButton5: string;
  sectBgImage5: string;
  sectBgColor5: string;
  sectHeight5: string;
  sectOpacity5: number;
  sectMargBot5: number;
  sectWPBack5: string;
  sectForceWhite5: string;
  sectWPPad5: string;

}
