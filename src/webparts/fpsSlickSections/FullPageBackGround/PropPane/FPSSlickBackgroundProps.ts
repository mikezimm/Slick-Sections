
// import {
//     PropertyPaneTextField,
//     PropertyPaneDropdown, 
//     // IPropertyPaneDropdownProps,
//     PropertyPaneToggle,
//     PropertyPaneSlider,
//     IPropertyPaneGroup,
//     IPropertyPaneField,
//     IPropertyPaneDropdownProps,
//     IPropertyPaneDropdownOption,
//     // IPropertyPaneDropdownOption,
//   } from '@microsoft/sp-property-pane';

// // import * as strings from 'FpsSlickSectionsWebPartStrings';

// // import { IThisFPSWebPartClass } from '@mikezimm/fps-library-v2/lib/banner/FPSWebPartClass/IThisFPSWebPartClass';
// // import { IFpsSlickSectionsWebPartProps } from '../IFpsSlickSectionsWebPartProps';
// import { FullPageImageFitStrings, FullPageOverlayColors, IFPSPageBGWPProps, } from '../../IFPSPageBGWPProps';

// const FPSSlickFullPageOverlayColorChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>FullPageOverlayColors.map((key, idx) => { return { index: idx, key: key, text: key }; });

// const FPSSlickFullPageImageFitChoices: IPropertyPaneDropdownOption[] = <IPropertyPaneDropdownOption[]>FullPageImageFitStrings.map((key, idx) => { return { index: idx, key: key, text: key }; });

// // import { IFPSSlickSectionWPProps } from '../components/IFpsSlickSectionsProps';
// // import { PageEditorAudienceChoices } from '../fpsReferences';
// /**
//  * FPSBanner3BasicGroup builds FPS Banner Basics Prop Pane Group: showBanner, bannerTitle, infoElementChoice, infoElementText,
//  * @param forceBanner
//  * @param modifyBannerTitle
//  * @param showBanner
//  * @param infoElementText
//  * @returns
//  */

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function FPSSlickBackgroundGroup( thisWPClass: any ): IPropertyPaneGroup {

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const thisProps: any = thisWPClass.properties as IFPSPageBGWPProps;

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const groupFields: IPropertyPaneField<any>[] = [];

//   const { fullPageImage, fullPageOverlayOpacity } = thisProps;

//   const hasFullCanvasBG = fullPageImage ? true : false;

//   groupFields.push(
//     PropertyPaneTextField(`fullPageImage`, {
//       label: 'Full Page Image url',
//       description: `Single picture spanning all sections`,
//     })
//   );

//   groupFields.push(
//     PropertyPaneSlider(`fullPageOverlayOpacity`, {
//       label: `Image Overlay Opacity - make Image lighter or darker`,
//       min: 0,
//       max: 1,
//       step: .1,
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       value: thisProps[ `fullPageOverlayOpacity` as any],
//     })
//   );

//   const hasOverlayOpacity = fullPageOverlayOpacity > 0 ? true : false;

//   groupFields.push(
//     PropertyPaneDropdown('fullPageOverlayColor', <IPropertyPaneDropdownProps>{
//       label: 'Overlay color - When opacity > 0',
//       options: FPSSlickFullPageOverlayColorChoices,
//       disabled: hasOverlayOpacity === true ? false : true,
//     }), );


//   groupFields.push(
//     PropertyPaneTextField(`fullPageImageFilter`, {
//       label: 'CSS Image Filter - for Full Page Image',
//       description: `example:  blur(5px) sepia(100%) - will both blur and colorize`,
//       disabled: hasFullCanvasBG === true ? false : true,
//     })
//   );

//   // whiteRefreshTip
//   groupFields.push(
//     PropertyPaneToggle( 'defaultWhiteText' , {
//       label: `Force default text color to White`,
//       onText: `When fullPageImage is dark`,
//       offText: `Off`
//       })
//   );

//   groupFields.push(
//     PropertyPaneTextField(`whiteRefreshTip`, {
//       label: 'White text refresh label',
//       description: `Tip to refresh White Font colors like:  Refresh White Text`,
//       disabled: thisProps.defaultWhiteText === true ? false : true,
//     })
//   );

//   groupFields.push(
//     PropertyPaneDropdown('fullPageImageFit', <IPropertyPaneDropdownProps>{
//       label: 'Image fit',
//       options: FPSSlickFullPageImageFitChoices,
//       disabled: hasFullCanvasBG === true ? false : true,
//     }), );

//   const propGroup: IPropertyPaneGroup= {
//     groupName: `FPS Full Page Background Props`,
//     isCollapsed: true,
//     groupFields: groupFields
//   };

//   return propGroup;
// }

