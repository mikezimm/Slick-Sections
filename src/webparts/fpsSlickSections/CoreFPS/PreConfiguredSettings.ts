/***
 *    d88888b d8888b. .d8888.      d8888b. d8888b. d88888b .d8888. d88888b d888888b .d8888. 
 *    88'     88  `8D 88'  YP      88  `8D 88  `8D 88'     88'  YP 88'     `~~88~~' 88'  YP 
 *    88ooo   88oodD' `8bo.        88oodD' 88oobY' 88ooooo `8bo.   88ooooo    88    `8bo.   
 *    88~~~   88~~~     `Y8b.      88~~~   88`8b   88~~~~~   `Y8b. 88~~~~~    88      `Y8b. 
 *    88      88      db   8D      88      88 `88. 88.     db   8D 88.        88    db   8D 
 *    YP      88      `8888Y'      88      88   YD Y88888P `8888Y' Y88888P    YP    `8888Y' 
 *          
 *          
 */

// import { encrptMeOriginalTest } from '../fpsReferences';

import { PresetFPSBanner, } from '../fpsReferences';
import { IPreConfigSettings, IAllPreConfigSettings,  } from '../fpsReferences';


/***
 *    db       .d88b.   .o88b.  .d8b.  db      
 *    88      .8P  Y8. d8P  Y8 d8' `8b 88      
 *    88      88    88 8P      88ooo88 88      
 *    88      88    88 8b      88~~~88 88      
 *    88booo. `8b  d8' Y8b  d8 88   88 88booo. 
 *    Y88888P  `Y88P'   `Y88P' YP   YP Y88888P 
 *                                             
 *                                             
 */

//Specific to this web part
export const WPForceEverywhere : IPreConfigSettings = {
    source: 'WPForceEverywhere',
    location: '*',
    props: {

        showRepoLinks : true,
        // showExport : false,
        showBanner : true,
    }
};

const defWPBack: string = `rgba(255, 255, 255, 0.6)`;

//Specific to this web part
export const WPPresetEverywhere : IPreConfigSettings = {
    source: 'WPPresetEverywhere',
    location: '*',
    props: {
        bannerTitle: "FPS Slick Sections",
        defPinState: 'disabled',
        showGoToHome: false,  //defaults to true
        showGoToParent: false,  //defaults to true
        homeParentGearAudience: 'Page Editors',

        // buttonShape: ISlickButtonShape;
        // buttonStyle: React.CSSProperties;

        buttonShape: `Pill`,
        buttonStyle: `'background': 'white','color': 'black'`,

        defaultWPBack: defWPBack,
        defaultWPPad: null,
        scrollBehavior: 'smooth',
        enableTabs: true,

        sectEnable1: false,
        sectBgImage1: ``,
        sectBgColor1: ``,
        sectHeight1: ``,
        sectOpacity1: 1,
        sectMargBot1: 0,
        sectWPBack1: '',

        sectEnable2: false,
        sectBgImage2: ``,
        sectBgColor2: ``,
        sectHeight2: ``,
        sectOpacity2: 1,
        sectMargBot2: 0,
        sectWPBack2: '',

        sectEnable3: false,
        sectBgImage3: ``,
        sectBgColor3: ``,
        sectHeight3: ``,
        sectOpacity3: 1,
        sectMargBot3: 0,
        sectWPBack3: '',

        sectEnable4: false,
        sectBgImage4: ``,
        sectBgColor4: ``,
        sectHeight4: ``,
        sectOpacity4: 1,
        sectMargBot4: 0,
        sectWPBack4: '',

        sectEnable5: false,
        sectBgImage5: ``,
        sectBgColor5: ``,
        sectHeight5: ``,
        sectOpacity5: 1,
        sectMargBot5: 0,
        sectWPBack5: '',
    }
};

export const PresetSomeRandomSite : IPreConfigSettings = {
    source: 'PresetSomeRandomSite',
    location: '/sites/FPS/'.toLowerCase(),
    props: {
        // homeParentGearAudience: 'Some Test Value',
        // requireDocumentation: false,
        requireDocumentation: 'redDark',
    }
};

export const ForceSomeRandomSite : IPreConfigSettings = {
    source: 'ForceSomeRandomSite',
    location: '/sites/FPS/'.toLowerCase(),
    props: {
        // homeParentGearAudience: 'Some Test Value',
        // requireDocumentation: false,
        // requireContacts: true,
        // bannerStyleChoice: 'redDark',
        // bannerStyle: createBannerStyleStr( 'redDark', 'banner'),
        // bannerCmdStyle: createBannerStyleStr( 'redDark', 'cmd'),
    }
};


export const PreConfiguredProps : IAllPreConfigSettings = {
    //Forced over-ride presets.
    //Forced and presets are applied in order of this array....
    //  This means the final preset in the array takes precedance.

    //For Forced, generally speaking put because this web part may have specific needs.
    forced: [ WPForceEverywhere, ForceSomeRandomSite,  ],

    //For Presets, Order should be:  PresetFPSBanner, WPPresetEverywhere, CUSTOM Sites,
    preset: [ PresetFPSBanner, WPPresetEverywhere, PresetSomeRandomSite, ],
};


// background: rgb(0,255,27);
// background: -moz-linear-gradient(76deg, rgba(0,255,27,1) 0%, rgba(255,241,0,1) 77%, rgba(255,0,196,1) 100%);
// background: -webkit-linear-gradient(76deg, rgba(0,255,27,1) 0%, rgba(255,241,0,1) 77%, rgba(255,0,196,1) 100%);
// background: linear-gradient(76deg, rgba(0,255,27,1) 0%, rgba(255,241,0,1) 77%, rgba(255,0,196,1) 100%);
// filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ff1b",endColorstr="#ff00c4",GradientType=1);