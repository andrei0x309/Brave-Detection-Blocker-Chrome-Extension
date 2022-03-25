function Navigator() {}
newNav = new Navigator();
const alreadyProxifiedNav = {
  userAgent: navigator.userAgent,
  appVersion: navigator.appVersion,
  platform: navigator.platform,
  vendor: navigator.vendor,
};
for (let prop in window.navigator) {
  if (prop === 'brave') {
    continue;
  }
  Object.defineProperty(newNav, prop, {
    value: window.navigator[prop],
    writable: true,
  });
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
});
