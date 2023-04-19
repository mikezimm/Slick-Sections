import { IFPSCoreReactComponentProps } from '@mikezimm/fps-library-v2/lib/banner/mainReact/ReactComponentProps';
import { IFPSCorePinMeReactComponentState } from '@mikezimm/fps-library-v2/lib/banner/mainReact/ReactComponentState';

import { ILoadPerformance } from '../fpsReferences';

export interface IFPSSlickSectionWPProps {
  index: number;
  enable: boolean;
  BgImage?: string;
  BgColor?: string;
  WPBackground?: string;
  Height?: string;
  MarginBottom?: number;
  Opacity?: number;
}

export interface IFpsSlickSectionsProps  extends IFPSCoreReactComponentProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;

  performance: ILoadPerformance;

  section1: IFPSSlickSectionWPProps;
  section2: IFPSSlickSectionWPProps;
  section3: IFPSSlickSectionWPProps;
  section4: IFPSSlickSectionWPProps;
  section5: IFPSSlickSectionWPProps;
  // section1: IFPSSlickSectionWPProps;
}


export interface IFpsSlickSectionsState  extends IFPSCorePinMeReactComponentState {

  showSettings: boolean;
  showThisWebpart: boolean;
  selectedSection: IFPSSlickSectionWPProps;

}