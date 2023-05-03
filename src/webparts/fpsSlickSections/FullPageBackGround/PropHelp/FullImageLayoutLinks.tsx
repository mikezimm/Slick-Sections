import * as React from 'react';

export const LinkStyles: React.CSSProperties = { padding: '8px 15px', marginBottom: '12px', color: 'darkblue', cursor: 'pointer' };
export const PageFitOriginal: JSX.Element = <a style={LinkStyles} onClick={() => { window.open(`${window.location.href}?fullPageFit=Original`, '_blank'); }}>Original:  ?fullPageFit=Original</a>;
export const PageFitLayout2: JSX.Element = <a style={LinkStyles} onClick={() => { window.open(`${window.location.href}?fullPageFit=Layout2`, '_blank'); }}>Layout2:  ?fullPageFit=Layout2</a>;
export const SetNormalColor: JSX.Element = <a style={LinkStyles} onClick={() => { window.open(`${window.location.href}?defaultFontColor=default`, '_blank'); }}>NormalColor:  ?defaultFontColor=default</a>;
export const SetWhiteColor: JSX.Element = <a style={LinkStyles} onClick={() => { window.open(`${window.location.href}?defaultFontColor=white`, '_blank'); }}>WhiteColor:  ?defaultFontColor=white</a>;
