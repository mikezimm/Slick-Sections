import * as React from 'react';
import styles from './FpsSlickSections.module.scss';
import { AllSectionsConst, ICallbackAddParamToUrl, IFPSSlickSectionWPProps, IFpsSlickSectionsProps, IFpsSlickSectionsState } from './IFpsSlickSectionsProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import { DisplayMode } from '@microsoft/sp-core-library';
import { getSectionCount } from "../CoreFPS/updateSectionCSS";
import { Icon,} from 'office-ui-fabric-react/lib/Icon';
// import { saveViewAnalytics } from '../CoreFPS/Analytics';

// import FetchBanner from '../CoreFPS/FetchBannerElement';
import FetchBannerX from '@mikezimm/fps-library-v2/lib/banner/bannerX/FetchBannerX';
// import { createSpecialElement } from '@mikezimm/fps-library-v2/lib/banner/components/SpecialBanner/component';
// import { ISpecialMessage, } from '@mikezimm/fps-library-v2/lib/banner/components/SpecialBanner/interface';


import { getBannerPages, } from './HelpPanel/AllContent';
import { check4Gulp, IBannerPages, IPinMeState } from "../fpsReferences";

import { ILoadPerformance, startPerformOp, updatePerformanceEnd } from "../fpsReferences";

import { ISiteThemes } from "@mikezimm/fps-library-v2/lib/common/commandStyles/ISiteThemeChoices";

import { getWebPartHelpElementCommon } from '../PropPaneHelp/Common';
import { getWebPartHelpElementSections } from '../PropPaneHelp/Sections';
//src\components\molecules\FullPageBackGround\PropHelp

import { getWebPartHelpElementCSSWarning } from '@mikezimm/fps-library-v2/lib/components/molecules/FullPageBackGround/PropHelp/CSSWarning';
import { getWebPartHelpElementCSSPerformance } from '@mikezimm/fps-library-v2/lib/components/molecules/FullPageBackGround/PropHelp/CSSPerformance';
import { getFullBackgroundHelp } from '@mikezimm/fps-library-v2/lib/components/molecules/FullPageBackGround/PropHelp/FullImage';
import { paramLinks } from '@mikezimm/fps-library-v2/lib/components/atoms/Links/CallBackLinks';
import { FullPageBGParams } from "@mikezimm/fps-library-v2/lib/components/molecules/FullPageBackGround/FullPageBGParams";

const SiteThemes: ISiteThemes = { dark: styles.fpsSiteThemeDark, light: styles.fpsSiteThemeLight, primary: styles.fpsSiteThemePrimary };

export default class FpsSlickSections extends React.Component<IFpsSlickSectionsProps, IFpsSlickSectionsState> {

  private _performance: ILoadPerformance = null;

  private _webPartHelpElement = [
    getWebPartHelpElementCSSWarning( ),
    getWebPartHelpElementCSSPerformance( ),
    getFullBackgroundHelp( this.props.bannerProps.addParamToUrl ),
    getWebPartHelpElementCommon( ),
    getWebPartHelpElementSections( ),
  ];

  private _contentPages : IBannerPages = getBannerPages( this.props.bannerProps );

  private _newRefreshId() :string  {

    const startTime = new Date();
    const refreshId = startTime.toISOString().replace('T', ' T'); // + ' ~ ' + startTime.toLocaleTimeString();
    return refreshId;

  }

  private _updatePinState( newValue :  IPinMeState ): void {
    this.setState({ pinState: newValue, });
  }


  /***
 *    d8b   db d88888b  .d8b.  d8888b.      d88888b  .d8b.  d8888b.      d88888b db      d88888b 
 *    888o  88 88'     d8' `8b 88  `8D      88'     d8' `8b 88  `8D      88'     88      88'     
 *    88V8o 88 88ooooo 88ooo88 88oobY'      88ooo   88ooo88 88oobY'      88ooooo 88      88ooooo 
 *    88 V8o88 88~~~~~ 88~~~88 88`8b        88~~~   88~~~88 88`8b        88~~~~~ 88      88~~~~~ 
 *    88  V888 88.     88   88 88 `88.      88      88   88 88 `88.      88.     88booo. 88.     
 *    VP   V8P Y88888P YP   YP 88   YD      YP      YP   YP 88   YD      Y88888P Y88888P Y88888P 
 *               
 *               
 */
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   private _farBannerElements: any[] = [];

   
  private makeDebugCmdStyles( withLeftMargin: boolean ) : React.CSSProperties{
    const propsCmdCSS: React.CSSProperties = JSON.parse(JSON.stringify( this.props.bannerProps.bannerCmdReactCSS ));
    propsCmdCSS.backgroundColor = 'transparent';
    propsCmdCSS.marginRight = '30px';
    propsCmdCSS.fontSize = '24px'; //Make sure icon is always visible

    return propsCmdCSS;
  }

  private debugCmdStyles: React.CSSProperties = this.makeDebugCmdStyles( true );

  private _firstSection: IFPSSlickSectionWPProps;
 /***
*     .o88b.  .d88b.  d8b   db .d8888. d888888b d8888b. db    db  .o88b. d888888b  .d88b.  d8888b. 
*    d8P  Y8 .8P  Y8. 888o  88 88'  YP `~~88~~' 88  `8D 88    88 d8P  Y8 `~~88~~' .8P  Y8. 88  `8D 
*    8P      88    88 88V8o 88 `8bo.      88    88oobY' 88    88 8P         88    88    88 88oobY' 
*    8b      88    88 88 V8o88   `Y8b.    88    88`8b   88    88 8b         88    88    88 88`8b   
*    Y8b  d8 `8b  d8' 88  V888 db   8D    88    88 `88. 88b  d88 Y8b  d8    88    `8b  d8' 88 `88. 
*     `Y88P'  `Y88P'  VP   V8P `8888Y'    YP    88   YD ~Y8888P'  `Y88P'    YP     `Y88P'  88   YD 
*                                                                                                  
*                                                                                                  
*/

  public constructor(props:IFpsSlickSectionsProps){
    super(props);

    const { sections, performance, bannerProps, slickCommonProps } = this.props;
    const { defaultSection, enableTabs, } = slickCommonProps;

    if ( this._performance === null ) { this._performance = performance;  }
    this._firstSection = sections[ 0 ];

    this.state = {
      pinState: bannerProps.fpsPinMenu.defPinState ? bannerProps.fpsPinMenu.defPinState : 'normal',
      showDevHeader: false,
      lastStateChange: '', 
      analyticsWasExecuted: false,
      refreshId: this._newRefreshId(),
      debugMode: false,
      showSpinner: false,

      showSettings: enableTabs !== true ? true : false,
      showThisWebpart: true,
      // https://github.com/mikezimm/Slick-Sections/issues/20
      selectedSection:  defaultSection === 0 ? AllSectionsConst : 
        sections[ defaultSection >= sections.length ? sections.length - 1 : defaultSection - 1 ],

      scrollWarnCount: 0,
    };
  }

  public componentDidMount(): void {
      if ( check4Gulp() === true )  console.log( `${``} ~ componentDidMount` );

      //Start tracking performance
      // this._performance.ops.fetch1 = startPerformOp( 'fetch1 TitleText', this.props.bannerProps.displayMode );
      //Do async code here

      //End tracking performance
      // this._performance.ops.fetch1 = updatePerformanceEnd( this._performance.ops.fetch1, true, 777 );

      const analyticsWasExecuted: boolean = null;
      // const analyticsWasExecuted = saveViewAnalytics( 'FPS Core114 Banner View', 'didMount' , this.props.bannerProps, this.state.analyticsWasExecuted, this._performance );

      if ( this.state.analyticsWasExecuted !==  analyticsWasExecuted ) {
        this.setState({ analyticsWasExecuted: analyticsWasExecuted });
      }
      this._updateSectionStyles( this.state.selectedSection );
    }



  //        
    /***
   *         d8888b. d888888b d8888b.      db    db d8888b. d8888b.  .d8b.  d888888b d88888b 
   *         88  `8D   `88'   88  `8D      88    88 88  `8D 88  `8D d8' `8b `~~88~~' 88'     
   *         88   88    88    88   88      88    88 88oodD' 88   88 88ooo88    88    88ooooo 
   *         88   88    88    88   88      88    88 88~~~   88   88 88~~~88    88    88~~~~~ 
   *         88  .8D   .88.   88  .8D      88b  d88 88      88  .8D 88   88    88    88.     
   *         Y8888D' Y888888P Y8888D'      ~Y8888P' 88      Y8888D' YP   YP    YP    Y88888P 
   *         
   *         
   */

  public componentDidUpdate( prevProps: IFpsSlickSectionsProps ): void {

    if ( check4Gulp() === true )  console.log( `${``} ~ componentDidUpdate` );

    const refresh = this.props.bannerProps.displayMode !== prevProps.bannerProps.displayMode ? true : false;

    //refresh these privates when the prop changes warrent it
    if ( refresh === true ) {
      this._contentPages = getBannerPages( this.props.bannerProps );
    }


    /**
     * This section is needed if you want to track performance in the react component.
     *    In the case of ALVFM, I do the following:
     *    this._performance.ops.fetch1 = startPerformOp( <=== Starts tracking perforamnce
     *    ... Stuff to do
     *    this._performance.ops.fetch1 = updatePerformanceEnd( <=== ENDS tracking performance
     *    this._replacePanelHTML = refreshPanelHTML( <=== This updates the performance panel content
     */

    if ( refresh === true ) {
      //Start tracking performance item
      this._performance.ops.fetch2 = startPerformOp( 'fetch2 TitleText', this.props.bannerProps.displayMode );
      this._firstSection = this.props.sections[ 0 ];
      /**
       *       Do async code here
       */

      //End tracking performance
      this._performance.ops.fetch2 = updatePerformanceEnd( this._performance.ops.fetch2, true, 999 );

      if ( check4Gulp() === true )  console.log('React componentDidUpdate - this._performance:', JSON.parse(JSON.stringify(this._performance)) );

    }

  }

  public render(): React.ReactElement<IFpsSlickSectionsProps> {
    const {
      hasTeamsContext,
      bannerProps,
      sections,
      slickCommonProps,
    } = this.props;

    const { buttonBgColor, } = slickCommonProps;

    if ( this.props.slickCommonProps.enableTabs !== true && bannerProps.displayMode === DisplayMode.Read ) return <div/>;

    console.log( `RenderState:`, this.state );
    const devHeader = this.state.showDevHeader === true ? <div><b>Props: </b> { `this.props.lastPropChange , this.props.lastPropDetailChange` } - <b>State: lastStateChange: </b> { this.state.lastStateChange  } </div> : null ;

    /***
     *    d8888b.  .d8b.  d8b   db d8b   db d88888b d8888b.      d88888b db      d88888b .88b  d88. d88888b d8b   db d888888b 
     *    88  `8D d8' `8b 888o  88 888o  88 88'     88  `8D      88'     88      88'     88'YbdP`88 88'     888o  88 `~~88~~' 
     *    88oooY' 88ooo88 88V8o 88 88V8o 88 88ooooo 88oobY'      88ooooo 88      88ooooo 88  88  88 88ooooo 88V8o 88    88    
     *    88~~~b. 88~~~88 88 V8o88 88 V8o88 88~~~~~ 88`8b        88~~~~~ 88      88~~~~~ 88  88  88 88~~~~~ 88 V8o88    88    
     *    88   8D 88   88 88  V888 88  V888 88.     88 `88.      88.     88booo. 88.     88  88  88 88.     88  V888    88    
     *    Y8888P' YP   YP VP   V8P VP   V8P Y88888P 88   YD      Y88888P Y88888P Y88888P YP  YP  YP Y88888P VP   V8P    YP    
     *                                        
     *                                        
     */

    // initiate array for adding more buttons here.  If not needed, can be commented out
    const farBannerElementsArray = [...this._farBannerElements, ];

    // https://github.com/mikezimm/Slick-Sections/issues/18
    if ( this.props.bannerProps.fpsPageBGWPProps.defaultWhiteText === true ) {
      farBannerElementsArray.push( 
        //https://github.com/mikezimm/Slick-Sections/issues/49
        this.props.bannerProps.fpsPageBGWPProps.whiteRefreshTip ? 
        <div title={'Refresh Font colors - re-whitens them after scrolling down'} onClick={ this.props.refreshStyles } 
          style={{ flexWrap: 'nowrap',
            justifyContent: 'start',
            alignItems: 'center',
            display: 'flex', cursor: 'pointer' }}>
              <div>{ this.props.bannerProps.fpsPageBGWPProps.whiteRefreshTip}</div>
              <Icon iconName={ 'SyncStatusSolid' } style={ bannerProps.bannerCmdReactCSS }/></div>:
        <div title={'Refresh Font colors - re-whitens them after scrolling down'}><Icon iconName={ 'SyncStatusSolid' } onClick={ this.props.refreshStyles } style={ bannerProps.bannerCmdReactCSS }/></div>
      );
    }

    //Setting showTricks to false here ( skipping this line does not have any impact on bug #90 )
    // https://github.com/mikezimm/Slick-Sections/issues/18
    if ( bannerProps.beAUser === false 
        && bannerProps.FPSUser.simple !== 'Reader' 
        && bannerProps.FPSUser.simple !== 'None' ) {
            farBannerElementsArray.push( 
              <div title={'Show Debug Info'}><Icon iconName='TestAutoSolid' onClick={ this._showSettings.bind(this) } style={ this.debugCmdStyles }/></div>
            );
    }

    // const FPSUser : IFPSUser = bannerProps.FPSUser;
    // const showSpecial = FPSUser.manageWeb === true || FPSUser.managePermissions === true || FPSUser.manageLists === true ? true : false;
    // const Special : ISpecialMessage = showSpecial === true ? specialUpgrade( 'warn', '/sites/TheSharePointHub/SitePages/DrillDown-WebPart-Upgrade---v2.aspx', ) : undefined;
    // Special.style = { color: 'black', background: 'limegreen' };

    if ( check4Gulp() === true )  console.log('React Render - this._performance:', JSON.parse(JSON.stringify(this._performance)) );

    const Banner = <FetchBannerX 

      // bonusHTML1={ 'BonusHTML1 Text' }
      panelPerformance={ this._performance }
      // bonusHTML2={ <div>BonusHTML2 Div</div> }
      siteThemes = { SiteThemes }

      bannerProps={ bannerProps }
      parentState={ this.state }

      nearBannerElementsArray={ [] }
      farBannerElementsArray={ farBannerElementsArray }

      contentPages={ this._contentPages }
      WebPartHelpPivots= { this._webPartHelpElement }

      // SpecialMessage = { Special }

      updatePinState = { this._updatePinState.bind(this) }
      pinState = { this.state.pinState }

    />;


    const showProps: JSX.Element[] = this._createThisSection( sections );

    const SettingInfo = this.state.showSettings !== true ? undefined : <div className={ styles.settingsArea } style={{ padding: '1em'}}>
        { paramLinks( FullPageBGParams, bannerProps.addParamToUrl ) }
        <h2 style={{ marginBottom: '0px' }}>FPS Slick Sections Web part properties</h2>
        {/* <div>Sample BgImage property:  {`url("https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtd4?ver=a738")`} </div> */}
        <div className={ styles.slickSectionElements }>
          { showProps }
        </div>
      </div>;

    const showButtons: JSX.Element[] = this._createThisButton( sections );

    const showScrollWarn: boolean = this.state.selectedSection.number < 3 || this.state.scrollWarnCount > 5 ? false : true;
    const buttonArray: JSX.Element = showButtons.length === 0 ? undefined : <div className={ styles.sectionRow }>
      <div className={ styles.sectionButtons }>
        { showButtons }
      </div>
      <div className={ [ styles.scrollMessage , showScrollWarn === false ? styles.scrollHide : '' ].join( ' ' ) }>Tip: Scroll mouse to load web parts.</div>
    </div>

    return (
      <section className={`${styles.fpsSlickSections} ${hasTeamsContext ? styles.teams : ''}`}
      style={{ background: buttonBgColor ? buttonBgColor : null }}>
        { devHeader }
        { Banner }
        { buttonArray }
        { SettingInfo }
      </section>
    );
  }

  private _createThisSection( sections: IFPSSlickSectionWPProps[], ) : JSX.Element[] {

    const elements : JSX.Element[] = [
      <div key={ 79 }className={ styles.sectionProps }>
        <h3>Defaults</h3>
        <ul>
          <li>Enable Tabs: <b>{ this.props.slickCommonProps.enableTabs === true ? 'true' : 'false' }</b></li>
          <li>Default Section: <b>{ this.props.slickCommonProps.defaultSection }</b></li>
          <li>Default BG CSS: <b>{ this.props.slickCommonProps.buttonBgColor }</b></li>
          <li>Button Shape: <b>{ this.props.slickCommonProps.buttonShape }</b></li>
          <li>Button Color: <b>{ this.props.slickCommonProps.buttonBgColor }</b></li>
          <li>Button Style: <b>{ JSON.stringify(this.props.slickCommonProps.buttonStyle) }</b></li>
        </ul>
      </div>
    ];

    [ ...sections].map( ( section, ) => {
      const ele = <div className={ styles.sectionProps }>
        <h3>section{ section.number }</h3>
        <ul>
          <li>Enabled: <b>{ section.enable }</b></li>
          <li>Button: <b>{ section.button }</b></li>
          <li>BgImage: <b>{ section.BgImage }</b></li>
          <li>BgColor: <b>{ section.BgColor }</b></li>
          <li>WPBackground: <b>{ section.WPBackground }</b></li>
          <li>Height: <b>{ section.Height }</b></li>
          <li>MarginBottom: <b>{ section.MarginBottom }</b></li>
          <li>Opacity: <b>{ section.Opacity }</b></li>
        </ul>
      </div>

      elements.push( ele );
    });

    return elements;

  }

  private _createThisButton( sections: IFPSSlickSectionWPProps[], ) : JSX.Element[] {

    const { enableTabs, buttonShape, buttonStyle } = this.props.slickCommonProps;
    const { selectedSection } = this.state;
    const pillClass = buttonShape === 'Pill' ? styles.pillShape : '';

    if ( enableTabs !== true ) return [
      <h2 key={ `79` } >Tabs are disabled in web part settings.
      </h2>
    ];

    const elements : JSX.Element[] = [
      <button key={ `79` } className={ [ selectedSection.number === AllSectionsConst.number ? styles.isSelected : null, pillClass ].join(' ') }
        onClick={ () => this._activateSection( AllSectionsConst ) } title={ `Show all sections` }
        style={ selectedSection.number === AllSectionsConst.number ? null : buttonStyle }>
        <Icon iconName='LineSpacing' className={ `` } style={{ fontSize: 'large' }}/>
      </button>
    ];

    [ ...sections].map( ( section, index ) => {
      if ( index <= getSectionCount() ) {
        const ele = <div >
          <button className={ [ selectedSection.number === section.number ? styles.isSelected : null, pillClass ].join(' ') }
            onClick={ () => this._activateSection( section ) }
            style={ selectedSection.number === section.number ? null : buttonStyle }>{ section.button }</button>
        </div>

        elements.push( ele );
      }
    });

    return elements;

  }

  private _activateSection( selectedSection: IFPSSlickSectionWPProps, ) : void {

    const { scrollWarnCount } = this.state;

    this.setState({ 
      selectedSection: selectedSection,
      scrollWarnCount: selectedSection.number > 1 ? scrollWarnCount + 1 : scrollWarnCount,
    });

    // if ( selectedSection.number > -1 && selectedSection.number < 99 ) {
    //   const divs: any[] = Array.from( document.querySelectorAll('.CanvasZone'));
    //   if ( divs[ selectedSection.number ] ) {
    //     divs[ selectedSection.number ].scrollIntoView({
    //       behavior: this.props.scrollBehavior,
    //       block: 'start'
    //     });
    //   }
    // }

    this._updateSectionStyles( selectedSection );


  }

  private _updateSectionStyles ( selectedSection: IFPSSlickSectionWPProps ): void {

    if ( this.props.slickCommonProps.enableTabs !== true ) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const divs: any[] = Array.from( document.querySelectorAll('.CanvasZone'));

    divs.map( ( thisDiv, sectionNo ) => {
      // Do not do anything to first section
      if ( sectionNo === 0 ) {

        if ( selectedSection.BgImage && sectionNo + 1 === selectedSection.number ) { 
          // Auto expand if just first section is visible to make it fuller if there is a background image
          // thisDiv.style.minHeight = '85vh';

        } else if (  selectedSection.number !== 1 ) {
          // Something other than first section was selected... Set height to what props say
          thisDiv.style.minHeight = this._firstSection.Height;
        }

      } else if ( sectionNo > 0 ) {

        if ( selectedSection.special === 'none' ) {
          thisDiv.classList.add( styles.hiddenSlickSection );
          thisDiv.classList.remove( styles.visibleSlickSection );
          thisDiv.style.minHeight = '0px';

        } else  if ( selectedSection.special === 'all' || sectionNo + 1 === selectedSection.number ) {
          thisDiv.classList.remove( styles.hiddenSlickSection );
          thisDiv.classList.add( styles.visibleSlickSection );
          thisDiv.style.minHeight = selectedSection.Height;

        } else {
          thisDiv.classList.add( styles.hiddenSlickSection );
          thisDiv.classList.remove( styles.visibleSlickSection );
          thisDiv.style.minHeight = '0px';
        }

      }
    });

    window.scrollBy(0,50);
    // window.scrollBy(-1,0);

  }

  private _showSettings(): void {
    this.setState({ showSettings: this.state.showSettings === true ? false : true });
  }


}
