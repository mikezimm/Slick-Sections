
import {
    PropertyPaneTextField, 
    // PropertyPaneDropdown, IPropertyPaneDropdownProps,
    PropertyPaneToggle,
    PropertyPaneSlider,
    IPropertyPaneGroup,
    IPropertyPaneField,
  } from '@microsoft/sp-property-pane';

import { IThisFPSWebPartClass } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/IThisFPSWebPartClass';
import { IFpsSlickSectionsWebPartProps } from '../IFpsSlickSectionsWebPartProps';
import { IFPSSlickSectionWPProps } from '../components/IFpsSlickSectionsProps';
// import { PageEditorAudienceChoices } from '../fpsReferences';
/**
 * FPSBanner3BasicGroup builds FPS Banner Basics Prop Pane Group: showBanner, bannerTitle, infoElementChoice, infoElementText,
 * @param forceBanner
 * @param modifyBannerTitle
 * @param showBanner
 * @param infoElementText
 * @returns
 */

// export function FPSBanner4BasicGroup(forceBanner: boolean, modifyBannerTitle: boolean, showBanner: boolean, infoElementText: boolean,
//   feedback: boolean, enableBeAUser: boolean) {

export function createSectionGroups( thisWPClass: IThisFPSWebPartClass, count: number ) : IPropertyPaneGroup[] {

  const propGroup: IPropertyPaneGroup[] = [];

  for (let i = 0; i < count; i++) {
    propGroup.push( FPSSlickSectionProp( thisWPClass , i + 1 ));
  }

  return propGroup;

}

export function FPSSlickSectionProp(thisWPClass: IThisFPSWebPartClass, sectionNo: number ): IPropertyPaneGroup {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const thisProps: any = thisWPClass.properties as IFpsSlickSectionsWebPartProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groupFields: IPropertyPaneField<any>[] = [];

  const enableSection: string = `sectEnable${sectionNo}`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const enableValue: boolean = thisProps[ enableSection as any] ;

  groupFields.push(
    PropertyPaneToggle( enableSection , {
      label: `Customize section ${sectionNo}`,
      // disabled: thisWPClass._forceBanner !== false ? true : false ,
      })
  );

  groupFields.push(
    PropertyPaneTextField(`sectButton${sectionNo}`, {
      label: 'Button text',
      description: 'Text on the button to activate section.  KEEP IT SHORT',
      disabled: thisProps.enableTabs !== true || enableValue !== true ? true : false,
    })
  );

  groupFields.push(
    PropertyPaneTextField(`sectBgImage${sectionNo}`, {
      label: 'Section Background-Image css',
      description: '',
      disabled: enableValue !== true ? true : false,
    })
  );

  groupFields.push(
    PropertyPaneTextField(`sectBgColor${sectionNo}`, {
      label: 'Section Background-Color css',
      description: '',
      disabled: enableValue !== true ? true : false,
    })
  );

  groupFields.push(
    PropertyPaneTextField(`sectWPBack${sectionNo}`, {
      label: 'Webparts Background-Color css',
      description: 'Defaults to transparent if using full page image',
      disabled: enableValue !== true ? true : false,
    })
  );

  groupFields.push(
    PropertyPaneToggle( `sectForceWhite${sectionNo}` , {
      label: `Force web part text white`,
      disabled: enableValue !== true ? true : false,
      })
  );

  groupFields.push(
    PropertyPaneSlider(`sectWPPad${sectionNo}`, {
      label: `Webparts padding (in px)`,
      min: 0,
      max: 50,
      step: 5,
      disabled: enableValue !== true ? true : false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: thisProps[ `sectWPPad${sectionNo}` as any],
    })
  );

  groupFields.push(
    PropertyPaneTextField(`sectHeight${sectionNo}`, {
      label: 'Min Section Height',
      description: 'ie 50vh',
      disabled: enableValue !== true ? true : false,
    })
  );

  // https://stackoverflow.com/a/54478540
  // <div style="background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/image.png);background-repeat: no-repeat;  background-position: center;"> </div>

  groupFields.push(
    PropertyPaneSlider(`sectMargBot${sectionNo}`, {
      label: `Bottom Margin`,
      min: 0,
      max: 50,
      step: 10,
      disabled: enableValue !== true ? true : false,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: thisProps[ `sectMargBot${sectionNo}` as any],
    })
  );

  // groupFields.push(
  //   PropertyPaneSlider(`sectOpacity${sectionNo}`, {
  //     label: `Background Opacity`,
  //     min: 0,
  //     max: 1,
  //     step: .1,
  //     disabled: enableValue !== true ? true : false,
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     value: thisProps[ `sectOpacity${sectionNo}` as any],
  //   })
  // );

  const propGroup: IPropertyPaneGroup= {
    groupName: `FPS Slick Section ${sectionNo}`,
    isCollapsed: true,
    groupFields: groupFields
  };

  return propGroup;
}


export function buildWPSectionArray(thisWPClass: IThisFPSWebPartClass, count: number ): IFPSSlickSectionWPProps[] {

  const sections: IFPSSlickSectionWPProps[]  = [];

  for (let i = 0; i < count; i++) {
    sections.push( GetSlickSectionProps( thisWPClass , i + 1 ));
  }

  return sections;

}


export function GetSlickSectionProps( thisWPClass: IThisFPSWebPartClass, sectionNo: number ): IFPSSlickSectionWPProps {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const thisProps: any = thisWPClass.properties as IFpsSlickSectionsWebPartProps;

  const result: IFPSSlickSectionWPProps = {
    number: sectionNo,
    enable: thisProps[ `sectEnable${sectionNo}` ],
    button: thisProps[ `sectButton${sectionNo}` ] ? thisProps[ `sectButton${sectionNo}` ] : `Section ${sectionNo}`,
    BgImage: thisProps[ `sectBgImage${sectionNo}` ],
    BgColor: thisProps[ `sectBgColor${sectionNo}` ],
    WPBackground: thisProps[ `sectWPBack${sectionNo}` ] ? thisProps[ `sectWPBack${sectionNo}` ] : thisProps.defaultWPBack ,
    ForceWhiteText: thisProps[ `sectForceWhite${sectionNo}` ] === true ? true : false ,
    WPPadding: thisProps[ `sectWPPad${sectionNo}` ] ? thisProps[ `sectWPPad${sectionNo}` ] : thisProps.defaultWPPad ,
    Height: thisProps[ `sectHeight${sectionNo}` ],
    Opacity: thisProps[ `sectOpacity${sectionNo}` ],
    MarginBottom: thisProps[ `sectMargBot${sectionNo}` ],
  }

  return result;

}