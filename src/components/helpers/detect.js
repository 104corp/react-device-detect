import * as create from './types';
import * as UAHelper from './get-ua-data';

function deviceDetect(userAgent) {
  const { serverUA, ...clientUA } = UAHelper;

  const { device, browser, engine, os, ua } = userAgent ? serverUA(userAgent) : clientUA;

  const type = create.checkType(device.type);

  const { isBrowser, isMobile, isTablet, isSmartTV, isConsole, isWearable } = type;

  if (isBrowser) {
    return create.broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return create.stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return create.consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return create.wearPayload(isWearable, engine, os, ua);
  }
}

export { deviceDetect };
