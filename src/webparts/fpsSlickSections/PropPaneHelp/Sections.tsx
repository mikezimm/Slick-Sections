import * as React from 'react';
import {  } from 'office-ui-fabric-react/lib/Icon';
// import ReactJson from "react-json-view";
import {  PivotItem, } from 'office-ui-fabric-react/lib/Pivot';

// export function putObjectIntoJSON ( obj: any, name: string = null ): JSX.Element {
//   // return <ReactJson src={ obj } name={ 'panelItem' } collapsed={ true } displayDataTypes={ true } displayObjectSize={ true } enableClipboard={ true } style={{ padding: '20px 0px' }}/>;
//   return <ReactJson src={ obj } name={ name } collapsed={ false } displayDataTypes={ false } displayObjectSize={ false } enableClipboard={ true } style={{ padding: '20px 0px' }} theme= { 'rjv-default' } indentWidth={ 2}/>;
// }

/**
 * FPS Slick Sections Notes:
 * 
 * ForceWhite does NOT work on collapsible sections.... might at first but if you collapse then expand, no go because web part does not re-apply the classes to the web parts.
 * @returns 
 */


export function getWebPartHelpElementSections (  ): JSX.Element {

  const WebPartHelpElement = <PivotItem headerText={ 'Sections' } > 
    <div className={ 'fps-pph-content' }>

      <div className={ 'fps-pph-topic' }>Customize section</div>
      <div>Enables customizing section styles on a specific section</div>
      <div>Note, certain settings in Common properties may be applied even if section is disabled</div>

      <div className={ 'fps-pph-topic' }>Section Background-Image css</div>
      <div>Just paste in the Url for the section background image</div>
      <div>Can also use more specific css property like: <b>{ `url("https:link.to.image.png")` }</b> </div>

      <div className={ 'fps-pph-topic' }>Section Background-Color css</div>
      <ul>
        <div><b>example</b>: description</div>
        <li><b>white</b>:  white</li>
        <li><b>#000000</b>:  black</li>
        <li><b>rgba(0, 0, 0, 0.8)</b>:  mostly-visible charcoal</li>
        <li><b>rgba(0, 0, 0, 0.2)</b>:  mostly-transparent charcoal</li>
        <li><b>rgba(255, 255, 255, .8)</b>:  mostly-visible white you can not see through well</li>
        <li><b>rgba(255, 255, 255, .2)</b>:  mostly-transparent white you can see through</li>
      </ul>

      <div className={ 'fps-pph-topic' }>Webparts Background-Color css</div>
      <div>Background color applied to all web parts in section.  See above for examples.</div>

      <div className={ 'fps-pph-topic' }>Force web part text white</div>
      <div>Enable if you use a Dark Webparts Background-Color</div>

      <div className={ 'fps-pph-topic' }>Min Section Height</div>
      <div>Can be used to set minimum section height</div>
      <div>Only use if using Tabs and you want section background to go to bottom of screen</div>
      <div>Example:  90vh for 90% of the window height</div>

    </div>
  </PivotItem>;

  return WebPartHelpElement;

}