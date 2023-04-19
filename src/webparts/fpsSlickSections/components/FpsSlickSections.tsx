import * as React from 'react';
import styles from './FpsSlickSections.module.scss';
import { IFPSSlickSectionWPProps, IFpsSlickSectionsProps, IFpsSlickSectionsState } from './IFpsSlickSectionsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DisplayMode } from '@microsoft/sp-core-library';
import { getSectionCount } from '../CoreFPS/SectionStyles';
import { Icon,} from 'office-ui-fabric-react/lib/Icon';
import { saveViewAnalytics } from '../CoreFPS/Analytics';

// import FetchBanner from '../CoreFPS/FetchBannerElement';
import FetchBannerX from '@mikezimm/fps-library-v2/lib/banner/bannerX/FetchBannerX';
// import { createSpecialElement } from '@mikezimm/fps-library-v2/lib/banner/components/SpecialBanner/component';
// import { ISpecialMessage, } from '@mikezimm/fps-library-v2/lib/banner/components/SpecialBanner/interface';

import { getWebPartHelpElementBoxTiles } from '../PropPaneHelp/PropPaneHelp';
import { getBannerPages, } from './HelpPanel/AllContent';
import { check4Gulp, IBannerPages, IPinMeState } from "../fpsReferences";

import { ILoadPerformance, startPerformOp, updatePerformanceEnd } from "../fpsReferences";

import { ISiteThemes } from "@mikezimm/fps-library-v2/lib/common/commandStyles/ISiteThemeChoices";
const SiteThemes: ISiteThemes = { dark: styles.fpsSiteThemeDark, light: styles.fpsSiteThemeLight, primary: styles.fpsSiteThemePrimary };



export default class FpsSlickSections extends React.Component<IFpsSlickSectionsProps, IFpsSlickSectionsState> {

  private _performance: ILoadPerformance = null;

  private _webPartHelpElement = [
    getWebPartHelpElementBoxTiles( ),
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

    if ( this._performance === null ) { this._performance = this.props.performance;  }

    this.state = {
      pinState: this.props.bannerProps.fpsPinMenu.defPinState ? this.props.bannerProps.fpsPinMenu.defPinState : 'normal',
      showDevHeader: false,
      lastStateChange: '', 
      analyticsWasExecuted: false,
      refreshId: this._newRefreshId(),
      debugMode: false,
      showSpinner: false,

      showSettings: false,
      showThisWebpart: true,
      selectedSection: this.props.section1,
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
      section1,
      section2,
      section3,
      section4,
      section5,
    } = this.props;

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
    const farBannerElementsArray = [...this._farBannerElements,
      //  ...[<div title={'Show Code Details'}><Icon iconName={ 'Code' } onClick={ this.toggleDebugMode.bind(this) } style={ bannerProps.bannerCmdReactCSS }></Icon></div>],
    ];

    //Setting showTricks to false here ( skipping this line does not have any impact on bug #90 )
    if ( this.props.bannerProps.beAUser === false ) {
      farBannerElementsArray.push( 
        <div title={'Show Debug Info'}><Icon iconName='TestAutoSolid' onClick={ this._showSettings.bind(this) } style={ this.debugCmdStyles }/></div>
      );
    }

    // const FPSUser : IFPSUser = this.props.bannerProps.FPSUser;
    // const showSpecial = FPSUser.manageWeb === true || FPSUser.managePermissions === true || FPSUser.manageLists === true ? true : false;
    // const Special : ISpecialMessage = showSpecial === true ? specialUpgrade( 'warn', '/sites/TheSharePointHub/SitePages/DrillDown-WebPart-Upgrade---v2.aspx', ) : undefined;
    // Special.style = { color: 'black', background: 'limegreen' };

    if ( check4Gulp() === true )  console.log('React Render - this._performance:', JSON.parse(JSON.stringify(this._performance)) );

    const Banner = <FetchBannerX 

      // bonusHTML1={ 'BonusHTML1 Text' }
      panelPerformance={ this._performance }
      // bonusHTML2={ <div>BonusHTML2 Div</div> }
      siteThemes = { SiteThemes }

      bannerProps={ this.props.bannerProps }
      parentState={ this.state }

      nearBannerElementsArray={ [] }
      farBannerElementsArray={ farBannerElementsArray }

      contentPages={ this._contentPages }
      WebPartHelpPivots= { this._webPartHelpElement }

      // SpecialMessage = { Special }

      updatePinState = { this._updatePinState.bind(this) }
      pinState = { this.state.pinState }

    />;


    let showProps: JSX.Element[] = [];

    showProps = this._createThisSection( section1, showProps );
    showProps = this._createThisSection( section2, showProps );
    showProps = this._createThisSection( section3, showProps );
    showProps = this._createThisSection( section4, showProps );
    showProps = this._createThisSection( section5, showProps );

    const SettingInfo = this.state.showSettings !== true ? undefined : <>
        <h2>FPS Slick Sections Web part properties</h2>
        {/* <div>Sample BgImage property:  {`url("https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtd4?ver=a738")`} </div> */}
        <div className={ styles.slickSectionElements }>
          { showProps }
      </div></>;

    let showButtons: JSX.Element[] = [];

    showButtons = this._createThisButton( section1, showButtons );
    showButtons = this._createThisButton( section2, showButtons );
    showButtons = this._createThisButton( section3, showButtons );
    showButtons = this._createThisButton( section4, showButtons );
    showButtons = this._createThisButton( section5, showButtons );

    const buttonArray: JSX.Element = showButtons.length === 0 ? undefined : <div className={ styles.sectionButtons }>
      { showButtons }
    </div>

    return (
      <section className={`${styles.fpsSlickSections} ${hasTeamsContext ? styles.teams : ''}`}>
        { devHeader }
        { Banner }
        { buttonArray }
        { SettingInfo }

      </section>
    );
  }

  private _createThisSection( section: IFPSSlickSectionWPProps, showProps: JSX.Element[] ) : JSX.Element[] {

    if ( showProps.length < getSectionCount() ) {
      const ele = <div className={ styles.sectionProps }>
        <h3>section{ showProps.length +1}</h3>
        <ul>
          <li>Enabled: <b>{ section.enable }</b></li>
          <li>BgImage: <b>{ section.BgImage }</b></li>
          <li>BgColor: <b>{ section.BgColor }</b></li>
          <li>WPBackground: <b>{ section.WPBackground }</b></li>
          <li>Height: <b>{ section.Height }</b></li>
          <li>MarginBottom: <b>{ section.MarginBottom }</b></li>
          <li>Opacity: <b>{ section.Opacity }</b></li>
        </ul>
      </div>

      showProps.push( ele );
    }


    return showProps;

  }

  private _createThisButton( section: IFPSSlickSectionWPProps, showProps: JSX.Element[] ) : JSX.Element[] {

    if ( showProps.length < getSectionCount() ) {
      const ele = <div >
        <button className={ this.state.selectedSection.index === section.index ? styles.isSelected : null }
          onClick={ () => this._activateSection( section ) }>Section { section.index }</button>
      </div>

      showProps.push( ele );
    }

    return showProps;

  }

  private _activateSection( selectedSection: IFPSSlickSectionWPProps, ) : void {

    const divs: any[] = Array.from( document.querySelectorAll('.CanvasZone'));

    this.setState({ selectedSection: selectedSection })

    divs.map( ( thisDiv, sectionNo ) => {
      // Do not do anything to first section
      if ( sectionNo > 0 ) {
        if ( sectionNo + 1 === selectedSection.index ) {
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

  }

  private _showSettings(): void {
    this.setState({ showSettings: this.state.showSettings === true ? false : true });
  }


}
