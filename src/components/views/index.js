import React, { Fragment } from 'react';
import { uaSelectors } from '../helpers/ssr-selectors';

export const AndroidView = ({ renderWithFragment, children, viewClassName, style }) => {
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isAndroid } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isBrowser } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isIE } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isIOS } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isMobile } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isTablet } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isWinPhone } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isMobileOnly } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isSmartTV } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isConsole } = uaSelectors(userAgent);
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
  const userAgent = (typeof _userAgent !== 'undefined') ? _userAgent : null;
  const { isWearable } = uaSelectors(userAgent);
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
