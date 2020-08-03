import { serverUA, setDefaults, isIOS13Check, getNavigatorInstance } from './get-ua-data';
import { BROWSER_TYPES, DEVICE_TYPES, OS_TYPES } from './types';

const isMobileType = (userAgent) => serverUA(userAgent).device.type === DEVICE_TYPES.MOBILE;
const isTabletType = (userAgent) => serverUA(userAgent).device.type === DEVICE_TYPES.TABLET;

const isMobileAndTabletType = (userAgent) => {
  switch (serverUA(userAgent).device.type) {
    case DEVICE_TYPES.MOBILE:
    case DEVICE_TYPES.TABLET:
      return true;
    default:
      return false;
  }
};

const isSmartTVType = (userAgent) => serverUA(userAgent).device.type === DEVICE_TYPES.SMART_TV;
const isBrowserType = (userAgent) => serverUA(userAgent).device.type === DEVICE_TYPES.BROWSER;
const isWearableType = (userAgent) => serverUA(userAgent).device.type === DEVICE_TYPES.WEARABLE;
const isConsoleType = (userAgent) => serverUA(userAgent).device.type === DEVICE_TYPES.CONSOLE;
const isAndroidType = (userAgent) => serverUA(userAgent).os.name === OS_TYPES.ANDROID;
const isWinPhoneType = (userAgent) => serverUA(userAgent).os.name === OS_TYPES.WINDOWS_PHONE;
const isIOSType = (userAgent) => serverUA(userAgent).os.name === OS_TYPES.IOS;
const isChromeType = (userAgent) => serverUA(userAgent).browser.name === BROWSER_TYPES.CHROME;
const isFirefoxType = (userAgent) => serverUA(userAgent).browser.name === BROWSER_TYPES.FIREFOX;
const isChromiumType = (userAgent) => serverUA(userAgent).browser.name === BROWSER_TYPES.CHROMIUM;
const isEdgeType = (userAgent) => serverUA(userAgent).browser.name === BROWSER_TYPES.EDGE;
const isYandexType = (userAgent) => serverUA(userAgent).browser.name === BROWSER_TYPES.YANDEX;
const isSafariType = (userAgent) =>
  serverUA(userAgent).browser.name === BROWSER_TYPES.SAFARI ||
  serverUA(userAgent).browser.name === BROWSER_TYPES.MOBILE_SAFARI;
const isMobileSafariType = (userAgent) => serverUA(userAgent).browser.name === BROWSER_TYPES.MOBILE_SAFARI;
const isOperaType = (userAgent) => serverUA(userAgent).browser.name === BROWSER_TYPES.OPERA;
const isIEType = (userAgent) =>
  serverUA(userAgent).browser.name === BROWSER_TYPES.INTERNET_EXPLORER ||
  serverUA(userAgent).browser.name === BROWSER_TYPES.IE;

const isElectronType = (userAgent) => {
  const ua = userAgent ? userAgent.toLowerCase() : serverUA().ua;
  return /electron/.test(ua);
};

const getBrowserFullVersion = (userAgent) => setDefaults(serverUA(userAgent).browser.version);
const getBrowserVersion = (userAgent) => setDefaults(serverUA(userAgent).browser.major);
const getOsVersion = (userAgent) => setDefaults(serverUA(userAgent).os.version);
const getOsName = (userAgent) => setDefaults(serverUA(userAgent).os.name);
const getBrowserName = (userAgent) => setDefaults(serverUA(userAgent).browser.name);
const getMobileVendor = (userAgent) => setDefaults(serverUA(userAgent).device.vendor);
const getMobileModel = (userAgent) => setDefaults(serverUA(userAgent).device.model);
const getEngineName = (userAgent) => setDefaults(serverUA(userAgent).engine.name);
const getEngineVersion = (userAgent) => setDefaults(serverUA(userAgent).engine.version);
const getUseragent = (userAgent) => setDefaults(serverUA(userAgent).ua);
const getDeviceType = (userAgent) => setDefaults(serverUA(userAgent).device.type, 'browser');

export function uaIsMobile() {
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  // const { isMobile } = uaSelectors(userAgent);
  return isMobileAndTabletType(userAgent);
}

export function uaSelectors(userAgent) {
  return {
    isSmartTV: isSmartTVType(userAgent),
    isConsole: isConsoleType(userAgent),
    isWearable: isWearableType(userAgent),
    isMobileSafari: isMobileSafariType(userAgent),
    isChromium: isChromiumType(userAgent),
    isMobile: isMobileAndTabletType(userAgent),
    isMobileOnly: isMobileType(userAgent),
    isTablet: isTabletType(userAgent),
    isBrowser: isBrowserType(userAgent),
    isAndroid: isAndroidType(userAgent),
    isWinPhone: isWinPhoneType(userAgent),
    isIOS: isIOSType(userAgent),
    isChrome: isChromeType(userAgent),
    isFirefox: isFirefoxType(userAgent),
    isSafari: isSafariType(userAgent),
    isOpera: isOperaType(userAgent),
    isIE: isIEType(userAgent),
    osVersion: getOsVersion(userAgent),
    osName: getOsName(userAgent),
    fullBrowserVersion: getBrowserFullVersion(userAgent),
    browserVersion: getBrowserVersion(userAgent),
    browserName: getBrowserName(userAgent),
    mobileVendor: getMobileVendor(userAgent),
    mobileModel: getMobileModel(userAgent),
    engineName: getEngineName(userAgent),
    engineVersion: getEngineVersion(userAgent),
    getUA: getUseragent(userAgent),
    isEdge: isEdgeType(userAgent),
    isYandex: isYandexType(userAgent),
    deviceType: getDeviceType(userAgent),
    isElectron: isElectronType(userAgent),
  };
}
