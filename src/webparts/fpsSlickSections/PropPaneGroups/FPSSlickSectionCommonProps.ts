
import {
    PropertyPaneTextField,
    PropertyPaneDropdown, IPropertyPaneDropdownProps,
    PropertyPaneToggle,
    PropertyPaneSlider,
    IPropertyPaneGroup,
    IPropertyPaneField,
  } from '@microsoft/sp-property-pane';

import * as strings from 'FpsSlickSectionsWebPartStrings';

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

export function FPSSlickSectionCommonProps( thisWPClass: IThisFPSWebPartClass ): IPropertyPaneGroup {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const thisProps: any = thisWPClass.properties as IFpsSlickSectionsWebPartProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groupFields: IPropertyPaneField<any>[] = [];

  const {
    scrollBehavior,
  } = thisProps;

  groupFields.push(
    PropertyPaneToggle( 'enableTabs' , {
      label: `Enable section Tabs`,
      // disabled: thisWPClass._forceBanner !== false ? true : false ,
      })
  );

  groupFields.push(
    PropertyPaneTextField(`defaultSection`, {
      label: 'Default section number',
      description: '1 is the first section on the page',
    })
  );
  groupFields.push(
    PropertyPaneTextField(`defaultWPBack`, {
      label: 'Default Webparts Background-Color css',
      description: 'Applies to all sections except where you specify differently',
    })
  );

  
  groupFields.push(
    PropertyPaneSlider(`defaultWPPad`, {
      label: `Default Webparts padding (in px)`,
      min: 0,
      max: 50,
      step: 5,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: thisProps[ `defaultWPPad` as any],
    })
  );

  groupFields.push(
    PropertyPaneDropdown('scrollBehavior', {
      disabled: true,
      label: strings.ScrollBehaviorFieldLabel,
      options: [{
        key: 'auto',
        text: strings.AutoScrollBehavior
      }, {
        key: 'smooth',
        text: strings.SmoothScrollBehavior
      }],
      selectedKey: scrollBehavior || 'auto'
    }),
  );


  const propGroup: IPropertyPaneGroup= {
    groupName: `FPS Slick Section Common props`,
    isCollapsed: true,
    groupFields: groupFields
  };

  return propGroup;
}

