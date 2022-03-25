const nullthrows = (v) => {
  if (v == null) throw new Error("it's a null");
  return v;
};

const injectScript = (src) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = function () {
    this.remove();
  };
  try {
    nullthrows(document.head || document.documentElement).appendChild(script);
  } catch {}
};

injectScript(chrome.runtime.getURL('/block-script.js'));
