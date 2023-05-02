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
const LinkStyles: React.CSSProperties = { padding: '8px 15px', marginBottom: '12px', color: 'darkblue', cursor: 'pointer' };

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

      <div className={ 'fps-pph-topic' }>Image Fit</div>
      <div>Unfortunately the Background image will not fill entire page in all screen sizes.</div>
      <div>We recommend you test the page by stretching to different sizes from wide-screen monitors to phone sizes in portrait mode.</div>
      <div>Sometimes you may see white bars on the top-bottom or side.</div>
      <div>If this causes an issue, you can try changing this setting, then save the page and completely refresh.</div>
      <div>To temporarily test each layout, click on these links which will open this page in new windows.</div>
      <div>
        <a style={ LinkStyles } onClick={() => { window.open( `${window.location.href}?fullPageFit=Original`, '_blank' )}}>?fullPageFit=Original</a>
        <a style={ LinkStyles } onClick={() => { window.open( `${window.location.href}?fullPageFit=Layout2`, '_blank' )}}>?fullPageFit=Layout2</a>
      </div>


      <div><mark>NOTE:</mark> If you are forcing white text, white bars may prevent you from finding the edit button.</div>
      <div>The work-around is to add this paramter to your page url and reload:  
        <a style={ LinkStyles } onClick={() => { window.open( `${window.location.href}?defaultNormalColor=true`, '_blank' )}}>?defaultNormalColor=true</a>
        .</div>
    </div>
  </PivotItem>;

  return WebPartHelpElement;

}