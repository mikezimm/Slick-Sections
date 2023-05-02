import { IFPSCoreReactComponentProps } from '@mikezimm/fps-library-v2/lib/banner/mainReact/ReactComponentProps';
import { IFPSCorePinMeReactComponentState } from '@mikezimm/fps-library-v2/lib/banner/mainReact/ReactComponentState';

import { ILoadPerformance } from '../fpsReferences';
import { IPropertyPaneDropdownOption } from '@microsoft/sp-property-pane';
import { IFPSPageBGWPProps } from '../IFPSPageBGWPProps';

export const FPSSlickButtonChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>[`Pill`, `Rectangle`].map((key, idx) => { return { index: idx, key: key, text: key }; });
export type ISlickButtonShape = `Pill` | `Rectangle` ;

export type ISectionSpecial = `all` | `none` ;

export interface IFPSSlickSectionWPProps {
  number: number;
  enable: boolean;
  button: string;
  special?: ISectionSpecial;
  options?: string;
  BgImage?: string;
  BgColor?: string;
  WPBackground?: string;
  WPPadding?: number;
  ForceWhiteText?: boolean;
  Height?: string;
  MarginBottom?: number;
  Opacity?: number;
  domElement?: HTMLElement;
}

export interface IFPSSlickCommonWPProps {
  buttonShape: ISlickButtonShape;
  buttonStyle: React.CSSProperties;
  buttonBgColor: string;
  defaultSection: number;

  scrollBehavior: ScrollBehavior;
  enableTabs: boolean;
}

export interface IFpsSlickSectionsProps  extends IFPSCoreReactComponentProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  performance: ILoadPerformance;

  refreshStyles(): void;

  fpsPageBGWPProps: IFPSPageBGWPProps;
  slickCommonProps: IFPSSlickCommonWPProps;
  sections: IFPSSlickSectionWPProps[];
  
  // // Used for full page background image
  // fullPageImage: string;  // background url
  // fullPageScrollable: boolean;  // scrollable image - image goes from top of content to bottom - false is fixed image
  // defaultWhiteText: boolean;  // default white text on all sections unless noted
  // whiteRefreshTip: string;


  // section1: IFPSSlickSectionWPProps;
  // section2: IFPSSlickSectionWPProps;
  // section3: IFPSSlickSectionWPProps;
  // section4: IFPSSlickSectionWPProps;
  // section5: IFPSSlickSectionWPProps;
  // section1: IFPSSlickSectionWPProps;
}


export interface IFpsSlickSectionsState  extends IFPSCorePinMeReactComponentState {

  showSettings: boolean;
  showThisWebpart: boolean;
  selectedSection: IFPSSlickSectionWPProps;
  scrollWarnCount: number;

}

export const AllSectionsConst : IFPSSlickSectionWPProps = {
  button: ``,
  special: 'all',
  number: 999,
  enable: true,
}

export const NoSectionsConst : IFPSSlickSectionWPProps = {
  button: ``,
  special: 'none',
  number: -1,
  enable: true,
}