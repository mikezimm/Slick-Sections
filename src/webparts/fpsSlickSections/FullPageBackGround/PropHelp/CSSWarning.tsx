// import * as React from 'react';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
// // import ReactJson from "react-json-view";
// import {  PivotItem, } from 'office-ui-fabric-react/lib/Pivot';

// // export function putObjectIntoJSON ( obj: any, name: string = null ): JSX.Element {
// //   // return <ReactJson src={ obj } name={ 'panelItem' } collapsed={ true } displayDataTypes={ true } displayObjectSize={ true } enableClipboard={ true } style={{ padding: '20px 0px' }}/>;
// //   return <ReactJson src={ obj } name={ name } collapsed={ false } displayDataTypes={ false } displayObjectSize={ false } enableClipboard={ true } style={{ padding: '20px 0px' }} theme= { 'rjv-default' } indentWidth={ 2}/>;
// // }

// /**
//  * FPS Slick Sections Notes:
//  * 
//  * ForceWhite does NOT work on collapsible sections.... might at first but if you collapse then expand, no go because web part does not re-apply the classes to the web parts.
//  * @returns 
//  */


// export function getWebPartHelpElementCSSWarning (  ): JSX.Element {

//   const WebPartHelpElement = <PivotItem headerText={ 'CSS Warning' } > 
//   <div className={ 'fps-pph-content' }>

//     <div className={ 'fps-pph-topic' }>CSS Warning - applies to ANY 3rd party web part that modifies SharePoint page styles</div>
//       <h4>Style changes may stop working without notice</h4>
//       <div>3rd party web parts rely on specific settings on SharePoint pages to work.</div>
//       <div>Microsoft can change those settings at any time without notice which could cause this web part to not work as desired.</div>
//       <div>If you notice any changes, please report to your SharePoint team as soon as possible.</div>
//       <div><b>DO NOT rely on any style changes as means for restricting access!</b> Use proper permission strategies instead.</div>

//       <h4>Perceived Lag with styles changing</h4>
//       <div>See next tab regarding performance of style changes.</div>

//       <div className={ 'fps-pph-topic' }>Incompatibilities - avoid these conditions</div>
//       <h4>Collapsable sections</h4>
//       <div>Styling updates to web parts only happen when the page is first loaded.  Due to how SharePoint builds the page, collapsible section styles get reset when expanding.</div>

//       <div className={ 'fps-pph-topic' }>Forced White Font color returns to black</div>
//       <div>If you scroll far down a page, SharePoint unloads some content like Site and Page Titles.</div>
//       <div>When you scroll back up, SharePoint recreates them from scratch which this web part can not detect.</div>
//       <div>If this happens, just press the Refresh Icon in the web part bar: <Icon style={{ fontSize: 'larger' }} iconName="SyncStatusSolid"/></div>

//       <div className={ 'fps-pph-topic' }>Styles do not get updated on all web parts</div>
//       <div>Do to the vast and every changing variety of web parts, only the most common have been tested.</div>
//       <div>These include</div>
//       <ul>
//         <li>Quick Links - most style variations</li>
//         <li>News, Image, Timer, Hero, People web parts</li>
//         <li>Embeded link web part</li>
//         <li>Youtube web part</li>
//         <li>Pivot Tiles web part</li>
//       </ul>

//       <div className={ 'fps-pph-topic' }>CSS Class Selectors</div>
//       <a href='https://github.com/mikezimm/Slick-Sections/blob/main/src/webparts/fpsSlickSections/CoreFPS/SectionStyles.ts'>SectionStyles.ts</a>
//       <div>Used to get all <b>Section divs</b>:  { `document.querySelectorAll('`}<b>.CanvasZone</b>{`')`}</div>
//       <div>Used to get all <b>WebPart divs</b>:  { `document.querySelectorAll('`}<b>.ControlZone</b>{`')`}</div>

//       <div className={ 'fps-pph-topic' }>Specific dependancy for Full Page Background Image</div>
//       <div>Used to Main Canvas Div - to add Full Page BG Image:  { `document.getElementsByClassName('`}<b>CanvasComponent</b>{`')`}</div>

//       <div className={ 'fps-pph-topic' }>Specific dependancies for styling White Text</div>
//       <div>scss class:  forceWhiteText - Code: <a href='https://github.com/mikezimm/Slick-Sections/blob/ab202b0aec3b42f24d34ce35be07e50ae2595842/src/webparts/fpsSlickSections/components/FpsSlickSections.module.scss#L207'>Link to scss file for White Text</a></div>

//       <div className={ 'fps-pph-topic' }>White Text:  Site Header: Title, Following, Share buttons</div>
//       <div>{ `document.querySelector('`}<b>{`[data-automationid="SiteHeader"]`}</b>{`')`}</div>
//       <div>Apply <b>.forceWhiteTextSiteHeader</b> to <b>SiteHeader</b></div>
//       <div><b><mark>NOTE:</mark> datautomationid</b> is ONE WORD without a hyphen for this data element</div>
//       <div>{`a,span ( attribute - link text and spans inside attributes )`}</div>
//       <div>{`a span:hover ( attribute - link text and spans inside attributes )`}</div>
//       <div>{`.ms-HorizontalNavItem-linkText.is-selected ( Add selected link underline bottom-border )`}</div>
//       <div>{`data-automationid="SiteHeaderTitle" a ( attribute - link which Title is )`}</div>
//       <div>Also targets all buttons and button icons</div>

//       <div className={ 'fps-pph-topic' }>White Text:  Page Title</div>
//       <div>{ `document.querySelector('`}<b>`{`[data-automation-id="pageHeader"]`}`</b>{`')`}</div>
//       <div>Apply <b>.forceWhiteTextPageHeader</b> to <b>pageHeader</b></div>
//       <div>{`[data-automation-id="TitleTextId"]`}</div>
//       <div>{`[data-automation-id="personaDetails"]`}</div>

//       <div className={ 'fps-pph-topic' }>White Text:  Used for Command Bar Div</div>
//       <div>{ `document.getElementsByClassName('`}<b>mainContent</b>{`')`}</div>
//       <div>Apply <b>.forceWhiteTextCmdButton</b> to <b>mainContent</b></div>
//       <div>{`[data-automation-id="visibleContent"]`}</div>
//       <div>{`[data-automation-id="CollapsibleLayer-Button"]`}</div>

//       <div className={ 'fps-pph-topic' }>White Text:  webPartHeader - All Webparts</div>
//       <div>{`[data-automation-id="webPartHeader"] [role="heading"]`}</div>

//       <div className={ 'fps-pph-topic' }>White Text:  News webpart</div>
//       <div>{`[data-automation-id="newsItem"]`}</div>
//       <div>{`[data-automation-id="newsItemTitle"]`}</div>
//       <div>{`[data-automation-id="newsItemDescription"]`}</div>

//       <div className={ 'fps-pph-topic' }>White Text:  Image webpart</div>
//       <div>{`[data-automation-id="captionElement"]`}</div>

//       <div className={ 'fps-pph-topic' }>White Text:  Text web part</div>
//       <div>{`[data-automation-id="textBox"] >> h2, h3, h4, p, a`}</div>

//       <div className={ 'fps-pph-topic' }>White Text:  Quick Links web part</div>
//       <div>{`[data-automation-id="quick-links-item-title"]`}</div>
//       <div>{`[data-automation-id="tile-card"]`}</div>
//       <div>{`[data-automation-id="button-card"]`}</div>
//       <div>{`[data-automation-id="grid-layout"]`}</div>

//       <div className={ 'fps-pph-topic' }>White Text:  Embed link web part</div>
//       <div>{`[data-automation-id="embedContainer"]`}</div>

//       <div className={ 'fps-pph-topic' }>White Text:  Collapsible Section - NOT supported</div>
//       <div>{`[data-automation-id="CollapsibleLayer-Button"]`}</div>

//     </div>
//   </PivotItem>;

//   return WebPartHelpElement;

// }