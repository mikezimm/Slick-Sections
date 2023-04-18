
/***
 *     .o88b.  .d88b.  .88b  d88. .88b  d88.  .d88b.  d8b   db 
 *    d8P  Y8 .8P  Y8. 88'YbdP`88 88'YbdP`88 .8P  Y8. 888o  88 
 *    8P      88    88 88  88  88 88  88  88 88    88 88V8o 88 
 *    8b      88    88 88  88  88 88  88  88 88    88 88 V8o88 
 *    Y8b  d8 `8b  d8' 88  88  88 88  88  88 `8b  d8' 88  V888 
 *     `Y88P'  `Y88P'  YP  YP  YP YP  YP  YP  `Y88P'  VP   V8P 
 *                                                             
 *                                                             
 */

export { IRepoLinks } from '@mikezimm/fps-library-v2/lib/components/atoms/Links/CreateLinks';

export { check4Gulp } from '@mikezimm/fps-pnp2/lib/services/sp/CheckGulping';
export { check4This } from "@mikezimm/fps-pnp2/lib/services/sp/CheckSearch";

export { createBasePerformanceInit, startPerformOp, updatePerformanceEnd } from '@mikezimm/fps-library-v2/lib/components/molecules/Performance/functions';
export { IPerformanceOp, ILoadPerformance, IHistoryPerformance, ILoadPerformanceOps } from '@mikezimm/fps-library-v2/lib/components/molecules/Performance/IPerformance';

export { IBannerPages, IWebpartBannerProps } from '@mikezimm/fps-library-v2/lib/banner/mainReact/IWebpartBannerProps';
export { IPinMeState, } from '@mikezimm/fps-library-v2/lib/banner/features/PinMe/Interfaces';

export { PresetFPSBanner, } from '@mikezimm/fps-library-v2/lib/common/PropPaneHelp/preconfig/PreConfiguredConstants';
export { IPreConfigSettings, IAllPreConfigSettings,  } from '@mikezimm/fps-library-v2/lib/common/PropPaneHelp/preconfig/IPreConfig';

export { JSON_Edit_Link } from '@mikezimm/fps-library-v2/lib/common/PropPaneHelp/atoms/JSONEdit';  //JSON_Edit_Link, 

export { defaultBannerCommandStyles } from '@mikezimm/fps-library-v2/lib/common/commandStyles/defaults';
export { createAudienceGroup } from '@mikezimm/fps-library-v2/lib/banner/propPane/Audiences/AudiencePropGroup';
export { EditorAudienceChoices, EveryoneAudienceChoices, PageEditorAudienceChoices } from '@mikezimm/fps-library-v2/lib/banner/propPane/Audiences/Interfaces';


export { doesObjectExistInArray, } from '@mikezimm/fps-library-v2/lib/logic/Arrays/searching/objectfind';

export { IFPSUser, } from '@mikezimm/fps-library-v2/lib/logic/Users/IUserInterfaces';


export { getExpandColumns, } from '@mikezimm/fps-library-v2/lib/pnpjs/Lists/getVX/getExpandV2';
export { getSelectColumns, } from '@mikezimm/fps-library-v2/lib/pnpjs/Lists/getVX/getSelectV2';


export { openThisLinkInNewTab, } from '@mikezimm/fps-library-v2/lib/components/atoms/Links/CreateLinks';
// export { replaceHTMLEntities, } from '@mikezimm/fps-library-v2/lib/logic/Strings/html';
export { sortObjectArrayByNumberKey, } from '@mikezimm/fps-library-v2/lib/logic/Arrays/sorting/numbers';
// export { doesObjectExistInArray, } from '@mikezimm/fps-library-v2/lib/logic/Arrays/searching/objectfind';

export { getHelpfullError, getHelpfullErrorV2 } from '@mikezimm/fps-library-v2/lib/logic/Errors/friendly';

export { ISeriesSort, ISeriesSortObject } from '@mikezimm/fps-library-v2/lib/logic/Arrays/sorting/Interfaces';

export { makeid } from '@mikezimm/fps-library-v2/lib/logic/Strings/guids';

// export { makeTheTimeObject, } from '@mikezimm/fps-library-v2/lib/logic/Time/timeObject';

// export { getNumberArrayFromString } from '@mikezimm/fps-library-v2/lib/logic/Strings/arraysFromString';
export { getHighlightedText } from '@mikezimm/fps-library-v2/lib/components/atoms/Elements/HighlightedText';

export { IAnySourceItem } from '@mikezimm/fps-library-v2/lib/components/molecules/SourceList/IAnyContent';
export { IFpsItemsReturn } from '@mikezimm/fps-library-v2/lib/pnpjs/Common/CheckItemsResults';

export { IStateSource } from '@mikezimm/fps-library-v2/lib/pnpjs/Common/IStateSource';

export { IContentGroup } from "@mikezimm/fps-library-v2/lib/components/molecules/SearchPage/Interfaces/IContentGroup";

export { IFPSFileObject } from '@mikezimm/fps-library-v2/lib/pnpjs/SourceItems/FileInterface';

