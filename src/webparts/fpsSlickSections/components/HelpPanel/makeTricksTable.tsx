// import * as React from 'react';
// import { IHelpTable } from "@mikezimm/fps-library-v2/lib/banner/components/SingleHelpPage/ISinglePageProps";
// import { check4This, makeid } from "../../fpsReferences";

// export const FPSFetchTricks: ITrickRow[] =     [
//   { param: `sourceResults`, value: `true` , description: `sourceResults - show State Source and Results` },
//   { param: `checkResults`, value: `true` , description: `checkAnyResults - show Any Results` },
//   { param: `fpsShowFetchResults`, value: `true` , description: `fpsShowFetchResults - show Fetch Results` },
//   { param: `prepSource`, value: `true` , description: `prepSource` },
//   { param: `addSearchMeta2`, value: `true` , description: `addSearchMeta2 - show when not found` },
// ];

// export const BannerHelpTricks: ITrickRow[] =     [
//   { param: `fetchBannerX`, value: `true` , description: `Show Banner Props and State` },
//   { param: `setPinArrowFunction`, value: `true` , description: `setPinArrowFunction` },
//   { param: `buildExportPropsX`, value: `true` , description: `buildExportPropsX - show Export Props` },
//   { param: `fpsDomSearch`, value: `true` , description: `findParentElementPropLikeThis - show Dom Search results` },
//   { param: `showAllConsole`, value: `true` , description: `showAllConsole - show All of the above` },
// ];

// export const CommonTricks: ITrickRow[] =     [
//   ...FPSFetchTricks, ...BannerHelpTricks,
// ];

// export const SuggestionTricks: ITrickRow = { param: `suggestions`, value: `true` , description: `getSuggestionsByKeys - show Suggestions details` };

// export const BubbleTricks: ITrickRow = { param: `showBubbles`, value: `true` , description: `makeBubbleElementFromBubbles - show Bubble details` };

// export const APITricks: ITrickRow =  { param: `fpsHttpResponse`, value: `true` , description: `createFPSHttpResponse - show API Results` };

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function makeCenteredSpan(info: any): any {
//   return { info: info, style: { textAlign: 'center' } };
// }

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function makeCenteredBoldSpan(info: any): any {
//   return { info: info, style: { textAlign: 'center', fontWeight: 'bolder' } };
// }

// export interface ITrickRow {
//   param: string; // like:  allowOtherSites
//   op?: '=';  // Defaults to =
//   value: string; // like:  true
//   description: string; 
// }

// export function createTricksTable( tricks: ITrickRow[], heading?: string ): IHelpTable {
//   const table : IHelpTable  = {
//     heading: heading ? heading : 'Undocumented console.log url parameters',
//     headers: ['Param','Value','Active?', 'Notes'],
//     rows: [],
//   };

//   const hasSearch = window.location.search && window.location.search.length > 0 ? true : false;
//   let searchParams = hasSearch === true ? window.location.search : '';
//   const hasSearchParams = searchParams.length > 0 ? '&' : '?';

//   let hasClear = false;

//   searchParams = searchParams.split('%3a').join(':');
//   tricks.map( trick => {
//     const trickParam = `${trick.param}${ trick.op ? trick.op : '=' }${trick.value}`;
//     if ( trick.param === 'clearParams' ) hasClear = true;
//     const activeLink = check4This( trickParam ) === true ? 
//       makeCenteredBoldSpan( 'true' ) : 
//       makeCenteredBoldSpan (<a href={ window.location + hasSearchParams + trickParam }>Activate!</a> );

//     table.rows.push( [ makeCenteredSpan( trick.param ), makeCenteredSpan( trick.value ), activeLink,  <span key={makeid(3)}>{ trick.description } </span>] );
//   });

//   if ( hasClear === false ) {
//     const bareLink = hasSearch ?  
//     makeCenteredBoldSpan (<a href={ window.location.pathname }>Activate!</a> ) :
//     makeCenteredBoldSpan('true');
//     table.rows.push( [ makeCenteredSpan( 'clearParams' ), makeCenteredSpan( `${hasSearch}` ), bareLink,  <span key={makeid(3)}>{ `Reload without any parameters (wwwthing after the ? in the url )` } </span>] );
//   }

//   return table;

// }
