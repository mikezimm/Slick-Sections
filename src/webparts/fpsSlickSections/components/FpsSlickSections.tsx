import * as React from 'react';
import styles from './FpsSlickSections.module.scss';
import { IFPSSlickSectionWPProps, IFpsSlickSectionsProps } from './IFpsSlickSectionsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DisplayMode } from '@microsoft/sp-core-library';
import { getSectionCount } from '../CoreFPS/SectionStyles';

export default class FpsSlickSections extends React.Component<IFpsSlickSectionsProps, {}> {
  public render(): React.ReactElement<IFpsSlickSectionsProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
      bannerProps,
      section1,
      section2,
      section3,
      section4,
      section5,
    } = this.props;

    if ( bannerProps.displayMode === DisplayMode.Read ) return <div/>;

    let showProps: JSX.Element[] = [];

    showProps = this._createThisSection( section1, showProps );
    showProps = this._createThisSection( section2, showProps );
    showProps = this._createThisSection( section3, showProps );
    showProps = this._createThisSection( section4, showProps );
    showProps = this._createThisSection( section5, showProps );

    return (
      <section className={`${styles.fpsSlickSections} ${hasTeamsContext ? styles.teams : ''}`}>
        <h2>FPS Slick Sections Web part properties</h2>
        {/* <div>Sample BgImage property:  {`url("https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wtd4?ver=a738")`} </div> */}
        <div className={ styles.slickSectionElements }>
          { showProps }
        </div>
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
}
