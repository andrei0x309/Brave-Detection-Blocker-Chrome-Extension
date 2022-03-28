let nav = function Navigator() {};
let copyNavRef = window.navigator;
nav = nav.bind(function () {
  return window.navigator;
});
newNav = new nav();
const alreadyProxifiedNav = {
  userAgent: window.navigator.userAgent,
  appVersion: window.navigator.appVersion,
  platform: window.navigator.platform,
  vendor: window.navigator.vendor,
  userLanguage: window.navigator.userLanguage,
  language: window.navigator.language,
  cookieEnabled: true,
};
for (let prop in window.navigator) {
  if (prop === 'brave') {
    continue;
  }
  newNav.prop = copyNavRef.prop;
}
for (let prop in alreadyProxifiedNav) {
  alreadyProxifiedNav.hasOwnProperty(prop) &&
    Object.defineProperty(newNav, prop, {
      value: alreadyProxifiedNav[prop],
      writable: true,
    });
}
Object.defineProperty(window, 'navigator', {
  value: newNav,
  writable: true,
  enumerable: true,
  configurable: true,
});
