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
// White text refresh label

export function getWebPartHelpElementCommon (  ): JSX.Element {

  const WebPartHelpElement = <PivotItem headerText={ 'Common' } > 
    <div className={ 'fps-pph-content' }>

      <div className={ 'fps-pph-topic' }>Enable section tabs</div>
      <div>{ `"On"` } will make tabs-buttons visible to users while reading the page</div>

      <div className={ 'fps-pph-topic' }>Default section number</div>
      <div>Section number to expand by default</div>
      <div><b>Set to 0</b> to expand all sections by default.</div>
      <div><b>Set to 1</b> to expand first section by default.</div>
      {/* <div className={ 'fps-pph-topic' }>Button shape</div> */}

      <div className={ 'fps-pph-topic' }>Default Webparts Background-Color css</div>
      <div>css color setting to apply to all web parts on the page, except when a section has a more specific setting</div>
      <ul>
        <div><b>example</b>: description</div>
        <li><b>white</b>:  white</li>
        <li><b>black</b>:  black</li>
        <li><b>rgba(0, 0, 0, 0.8)</b>:  mostly-visible charcoal</li>
        <li><b>rgba(0, 0, 0, 0.2)</b>:  mostly-transparent charcoal</li>
        <li><b>rgba(255, 255, 255, .8)</b>:  mostly-visible white you can not see through well</li>
        <li><b>rgba(255, 255, 255, .2)</b>:  mostly-transparent white you can see through</li>
      </ul>

      <div className={ 'fps-pph-topic' }>Button bar background color</div>
      <div>Type in html color to set the background color of the web part.</div>

      <div className={ 'fps-pph-topic' }>Default Button Style</div>
      <div>Used to customize the Section Buttons.</div>
      <div>Unsupported - React.CSS properties with quotes around attributes.  Not supported for regular users.</div>


    </div>
  </PivotItem>;

  return WebPartHelpElement;

}