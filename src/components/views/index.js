import React, { Fragment } from 'react';
import { uaSelectors } from '../helpers/ssr-selectors';

const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
console.log('userAgent',userAgent);

const {
  isAndroid,
  isBrowser,
  isIOS,
  isMobile,
  isIE,
  isWinPhone,
  isSmartTV,
  isMobileOnly,
  isWearable,
  isConsole,
  isTablet
} = uaSelectors(userAgent);

export const AndroidView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isAndroid ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const BrowserView = ({ renderWithFragment, children, viewClassName, style }) => {
  const userAgent1 = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  console.log('userAgent1',userAgent1);
  return isBrowser ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const IEView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isIE ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const IOSView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isIOS ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const MobileView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isMobile ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const TabletView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isTablet ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const WinPhoneView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isWinPhone ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const MobileOnlyView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isMobileOnly ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const SmartTVView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isSmartTV ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const ConsoleView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isConsole ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const WearableView = ({ renderWithFragment, children, viewClassName, style }) => {
  return isWearable ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};

export const CustomView = ({ renderWithFragment, children, viewClassName, style, condition }) => {
  return condition ? (
    renderWithFragment ? (
      <Fragment>{children}</Fragment>
    ) : (
      <div className={viewClassName} style={style}>
        {children}
      </div>
    )
  ) : null;
};
