// import * as React from 'react';
// import {  } from 'office-ui-fabric-react/lib/Icon';
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


// export function getWebPartHelpElementCSSPerformance (  ): JSX.Element {

//   const WebPartHelpElement = <PivotItem headerText={ 'CSS Performance' } > 
//     <div className={ 'fps-pph-content' }>
//       <div className={ 'fps-pph-topic' }>CSS Lag and performance</div>
//       <div>If the web part is not in the <b>active</b> part of the page, styles will not get updated until the user moves/scrolls to where the web part can be loaded.</div>
//       <div>Any changes to styles happen <b>AFTER</b> the page loads <b>so you may notice it change</b>.</div>
//       <div>See Improving Performance below for tips on how to improve perforamnce.</div>

//       <div className={ 'fps-pph-topic' }>Tips to improve performance</div>
//       <h4>Web part location</h4>
//       <div><b>Install</b> FPS Slick Sections web part <b>in the first section on the page</b>.</div>

//       <h4>Minimize what SharePoint has to do before web part is loaded</h4>
//       <ul>
//         <li>Remove as much navigation as possible.</li>
//         <ul>
//           <li>Disable Navigation in <b>Change the Look : Navigation</b> menu</li>
//           <li>Remove un-neccessary links in navigation</li>
//           <li>If you are trying to totally hide SharePoint interface, disconnect from HubSite</li>
//         </ul>
//         <li>Reduce the number of sections on your page</li>
//         <li>Reduce the number of web parts on your page</li>
//       </ul>
//     </div>
//   </PivotItem>;

//   return WebPartHelpElement;

// }