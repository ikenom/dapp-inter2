/// <reference types="vite/client" />

declare module '@agoric/ui-components' {
  export const parseAsValue;
  export const stringifyValue;
  export const stringifyRatioAsPercent;
  export const stringifyRatio;
}

declare module '@agoric/wallet/api/src/marshal-contexts' {
  export const makeImportContext;
}

declare module '@agoric/web-components' {
  export const makeAgoricKeplrConnection;
  export const AgoricKeplrConnectionErrors;
  export const BridgeProtocol;
}

declare module '@agoric/web-components/react' {
  export const makeReactAgoricWalletConnection;
  export const makeReactDappWalletBridge;
}
