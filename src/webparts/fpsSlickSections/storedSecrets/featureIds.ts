
export interface IKnownFeature {
  "data-sp-feature-tag": string;
  "data-sp-feature-instance-id": string;
  "data-automation-id": string; //SpacerMainContent
}

const KnownFeaturesALV: IKnownFeature [] = [
  {
    "data-sp-feature-tag":  "QuickLinksWebPart web part (Quick links)",
    "data-sp-feature-instance-id": "a36f04fa-c268-4bad-b163-3a9c65e35d1d",
    "data-automation-id": ``
  },
  {
    "data-sp-feature-tag":  "SpacerWebPart web part (Spacer)",
    "data-sp-feature-instance-id": "d9806b39-c942-46ae-b2c4-59175928c719",
    "data-automation-id": `SpacerMainContent`
  }
]

const KnownFeaturesClicky: IKnownFeature [] = [
  {
    "data-sp-feature-tag":  "QuickLinksWebPart web part (Quick links)",
    "data-sp-feature-instance-id": "a36f04fa-c268-4bad-b163-3a9c65e35d1d",
    "data-automation-id": ``
  },
  {
    "data-sp-feature-tag":  "SpacerWebPart web part (Spacer)",
    "data-sp-feature-instance-id": "d9806b39-c942-46ae-b2c4-59175928c719",
    "data-automation-id": `SpacerMainContent`
  }
]

export function TenantFeatures(): IKnownFeature[] {

  if ( window.location.hostname === 'autoliv' ) {
    return KnownFeaturesALV;

  } else if ( window.location.hostname === 'mcclickster' ) {
    return KnownFeaturesClicky;
  }
}