let nav = function Navigator() {};
let copyNavRef = window.navigator;
nav = nav.bind(function () {
  return window.navigator;
});
newNav = new nav();
const navClones = {
  userAgent: window.navigator.userAgent,
  appVersion: window.navigator.appVersion,
  platform: window.navigator.platform,
  vendor: window.navigator.vendor,
  language: window.navigator.language,
  oscpu: window.navigator.oscpu,
  cookieEnabled: true,
  appCodeName: window.navigator.appCodeName,
  appName: window.navigator.appName,
  product: window.navigator.product,
  geolocation: window.navigator.geolocation,
  onLine: window.navigator.onLine,
  sendBeacon: window.navigator.sendBeacon.bind(window.navigator),
  getBattery: window.navigator.getBattery.bind(window.navigator),
  vibrate: window.navigator.vibrate.bind(window.navigator),
  share: window.navigator.share.bind(window.navigator),
  canShare: window.navigator.canShare.bind(window.navigator),
  registerProtocolHandler: window.navigator.registerProtocolHandler.bind(window.navigator),
  requestMediaKeySystemAccess: window.navigator.requestMediaKeySystemAccess.bind(window.navigator),
  requestMIDIAccess: window.navigator.requestMIDIAccess.bind(window.navigator),
  bluetooth: window.navigator.bluetooth.bind(window.navigator),
  onLine: window.navigator.onLine,
};
const skipPropList = [...Object.keys(navClones), 'brave'];
for (let prop in window.navigator) {
  if (skipPropList.includes(prop)) {
    continue;
  }
  newNav[prop] = copyNavRef[prop];
}
for (let prop in navClones) {
  navClones.hasOwnProperty(prop) &&
    Object.defineProperty(newNav, prop, {
      value: navClones[prop],
      writable: true,
    });
}
Object.defineProperty(window, 'navigator', {
  value: newNav,
  writable: true,
  enumerable: true,
  configurable: true,
});
