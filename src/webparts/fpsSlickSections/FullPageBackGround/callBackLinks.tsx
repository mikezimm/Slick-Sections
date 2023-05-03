import * as React from 'react';
import { Icon,} from 'office-ui-fabric-react/lib/Icon';
import { ICallbackAddParamToUrl } from '../components/IFpsSlickSectionsProps';

const LinkStyles: React.CSSProperties = { padding: '3px 0px', margin: '5px 8px', color: 'darkblue', cursor: 'pointer', whiteSpace: 'nowrap' };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createParamLink( param: string, onClick: ICallbackAddParamToUrl, newTab: boolean = false ): JSX.Element {
  const iconName: string = window.location.search.toLowerCase().indexOf( param.toLowerCase() ) > -1 ? 'CheckboxComposite' : 'Checkbox' ;
  const iconColor: string = iconName === 'Checkbox' ? 'darkgreen' : 'darkred';
  const linky: JSX.Element = <a style={{ ...LinkStyles, ...{ color: iconColor }}} 
      onClick={() => { onClick( param, newTab === true ? false : true, newTab, ); }}
    ><Icon style={{ paddingRight: '5px'}} iconName={ iconName } />?{param}</a>;
  return linky;
}

export function paramLinks( showParams: string[], addParamToUrl: ICallbackAddParamToUrl ): JSX.Element {
  const paramLinks: JSX.Element = <div>
    { showParams.map( param =>  { return createParamLink( param, addParamToUrl, ) } ) }
  </div>;
  return paramLinks;
}
