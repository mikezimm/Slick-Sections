import { IFPSCoreReactComponentProps } from '@mikezimm/fps-library-v2/lib/banner/mainReact/ReactComponentProps';
import { IFPSCorePinMeReactComponentState } from '@mikezimm/fps-library-v2/lib/banner/mainReact/ReactComponentState';

import { ILoadPerformance } from '../fpsReferences';

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
  Height?: string;
  MarginBottom?: number;
  Opacity?: number;
  domElement?: HTMLElement;
}

export interface IFpsSlickSectionsProps  extends IFPSCoreReactComponentProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  performance: ILoadPerformance;

  defaultSection: number;
  sections: IFPSSlickSectionWPProps[];
  scrollBehavior: ScrollBehavior;
  enableTabs: boolean;

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