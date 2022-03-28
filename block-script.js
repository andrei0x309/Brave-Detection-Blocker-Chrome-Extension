let nav = function Navigator() {};
let copyNavRef = window.navigator;
nav = nav.bind(function () {
  return window.navigator;
});
newNav = new nav();
const primitivesNav = {
  userAgent: window.navigator.userAgent,
  appVersion: window.navigator.appVersion,
  platform: window.navigator.platform,
  vendor: window.navigator.vendor,
  language: window.navigator.language,
  cookieEnabled: true,
  appCodeName: window.navigator.appCodeName,
  appName: window.navigator.appName,
  product: window.navigator.product,
  geolocation: window.navigator.geolocation,
  onLine: window.navigator.onLine,
  sendBeacon: window.navigator.sendBeacon.bind(window.navigator),
};

for (let prop in window.navigator) {
  if (prop === 'brave') {
    continue;
  }
  newNav[prop] = copyNavRef[prop];
}
for (let prop in primitivesNav) {
  primitivesNav.hasOwnProperty(prop) &&
    Object.defineProperty(newNav, prop, {
      value: primitivesNav[prop],
      writable: true,
    });
}
Object.defineProperty(window, 'navigator', {
  value: newNav,
  writable: true,
  enumerable: true,
  configurable: true,
});