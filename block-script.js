class Navigator {
  constructor(copyNavRef) {
    this.name = 'Navigator';
    this.prototype = copyNavRef;
    for (let prop in copyNavRef) {
      if (prop === 'brave') {
        continue;
      }
      Object.defineProperty(this, prop, {
        value: typeof copyNavRef[prop] === 'function' ? copyNavRef[prop].bind(copyNavRef) : copyNavRef[prop],
        writable: true,
        enumerable: false,
      });
    }
  }
}
Navigator = Navigator.bind(window.navigator);
newNav = new Navigator(window.navigator);
delete window.navigator.__proto__.brave;
newNav.__proto__.__proto__ = window.navigator.__proto__;

const websiteExceptions = ['accounts.google'];

const check = websiteExceptions.find((website) => {
  if (window.location.hostname.includes(website)) {
    return true;
  }
});

if (check) {
  window.navigator.brave = undefined;
} else {
  Object.defineProperty(window, 'navigator', {
    value: newNav,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}