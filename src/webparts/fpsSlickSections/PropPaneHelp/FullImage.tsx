import * as React from 'react';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
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

export function getWebPartHelpElementFullImage (  ): JSX.Element {

  const WebPartHelpElement = <PivotItem headerText={ 'Background' } > 
    <div className={ 'fps-pph-content' }>

      <div className={ 'fps-pph-topic' }>Full Page Image url</div>
      <div>If you want a single image as the page background, paste full link to image here</div>
      <div>When you scroll, the page scrolls but image is fixed.</div>

      <div className={ 'fps-pph-topic' }>Image Overlay</div>
      <div>Adjust Opacity greater than 0 in order to make background image darker or lighter.</div>
      <div>Then select overlay color.</div>

      <div className={ 'fps-pph-topic' }>CSS Image Filter</div>
      <div>Allows you to apply a filter to your background image like blue or grayscale.</div>
      <div><a href={ `https://www.w3schools.com/cssref/playdemo.php?filename=playcss_filter&preval=blur(5px)` }>See image filter examples here</a>.</div>
      <div>Note you can combine filters to such as doing this:  <b>blur(5px) sepia(100%)</b>.</div>

      <div className={ 'fps-pph-topic' }>Force default text color white</div>
      <div><b>Toggle on</b> if you are using a <b>dark color full page image</b>.</div>
      <div>Makes certain <b>web backgrounds transparent with white text</b></div>
      <div><mark>Text color may also be white while Editing the page when background image is not visible</mark></div>

      <div className={ 'fps-pph-topic' }>White text refresh label</div>
      <div>If you force white text, the web part bar will have this icon:  <Icon style={{ fontSize: 'larger' }} iconName="SyncStatusSolid"/></div>
      <div>You can add text to left of that icon you want to tell people what it is.</div>
      <div>Note that the message should be very short and may crash into a longer web part title to {`it's`} left.</div>

    </div>
  </PivotItem>;

  return WebPartHelpElement;

}