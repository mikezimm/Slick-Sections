import { IHelpTable, } from '@mikezimm/fps-library-v2/lib/banner/components/SingleHelpPage/ISinglePageProps';
// import { convertIssuesMarkdownStringToSpan } from '../../fpsReferences';

import { createAboutRow } from '@mikezimm/fps-library-v2/lib/banner/components/Panel/createAboutRow';
import { IWebpartBannerProps } from '@mikezimm/fps-library-v2/lib/banner/mainReact/IWebpartBannerProps';

export const panelVersionNumber = '2023-05-04 - 1.0.0.09'; //Added to show in panel

export function aboutTable( bannerProps: IWebpartBannerProps ): { table: IHelpTable } {

    const table : IHelpTable  = {
        heading: 'Version History',
        headers: ['Date','Version','Focus'],
        rows: [],
    };

    /**
     * Security update log
     *
     * converting all links and cdns to lower case so casing does miss a flag
     * standardizing all cdn links to start with /sites/ if on tenant
     * standardinzing all tag lings to start with /sites/ if on tenant
     * removing any extra // from both cdns and file links so you cant add extra slash in a url and slip by
     *
     * Does NOT find files without extensions (like images and also script files.)
     *
     * WARNING:  DO NOT add any CDNs to Global Warn or Approve unless you want it to apply to JS as well.
     */

    table.rows.push( createAboutRow('2023-05-04',"1.0.0.09","#56, #61, #63", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );

    table.rows.push( createAboutRow('2023-05-03',"1.0.0.08","#47, #53, #54, #55 - Refactor FullPage into library", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );

    table.rows.push( createAboutRow('2023-05-02',"1.0.0.07","#43, #44, #45, #46, #49, #51", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );

    table.rows.push( createAboutRow('2023-05-01',"1.0.0.06","#34, #36, #37, #38, #39, #40, #41", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );
    table.rows.push( createAboutRow('2023-04-28',"1.0.0.05","#17, #24, #25, #26, #28, #29, #30, #31, #32", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );
    table.rows.push( createAboutRow('2023-04-25',"1.0.0.04","#9, #18, #19, #20, #21, #22", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );
    table.rows.push( createAboutRow('2023-04-19',"1.0.0.03","#1, #11, #12, #13, #14, #15, Add Tabs", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );
    table.rows.push( createAboutRow('2023-04-18',"1.0.0.02","#7, #8, Add performance", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );
    table.rows.push( createAboutRow('2023-04-17',"1.0.0.01","#2, #3, #4, #5, Initial Release", bannerProps.showRepoLinks === true ? bannerProps.gitHubRepo : null ) );


    return { table: table };

}

