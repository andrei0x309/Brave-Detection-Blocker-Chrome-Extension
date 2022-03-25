'use strict';


window.addEventListener(
  'message',
  (event) => {
    if (event.data.action === 'proxyError') {
      displayAlert('error', 'Wrong data, or proxy down double check the input.');
    }
  },
  false,
);

// let btn_close_alert = document.getElementById('closeAlertBtn');

// const btnProxyStop = document.getElementById('btnProxyStop');
// const btnProxyStart = document.getElementById('btnProxyStart');



// const proxyTypeGroup = document.getElementById('proxyTypeGroup');

// const btnProxyType = [
//   document.getElementById('btnProxyTypeHttp'),
//   document.getElementById('btnProxyTypeHttps'),
//   document.getElementById('btnProxyTypeSocks4'),
//   document.getElementById('btnProxyTypeSocks5'),
// ];

// for (const btn of btnProxyType) {
//   if (btn) {
//     btn.onclick = async function () {
//       const active = proxyTypeGroup.querySelector('.btn-green');
//       if (active) {
//         active.classList.remove('btn-green');
//       }
//       this.classList.add('btn-green');
//       bgP.window.extOptions.activeProxy.type = this.id.replace('btnProxyType', '').toLowerCase();
//       await bgP.window.setOptions(bgP.window.extOptions);
//     };
//   }
// }

// const spanProxyStatusOn = document.getElementById('spanProxyStatusOn');
// const spanProxyStatusOff = document.getElementById('spanProxyStatusOff');

// const inputproxyHost = document.getElementById('proxyHost');
// const inputproxyPort = document.getElementById('proxyPort');

// const updatePopup = function (options) {
//   if (options.proxyEnabled) {
//     spanProxyStatusOff.classList.add('hidden');
//     spanProxyStatusOn.classList.remove('hidden');

//     btnProxyStart.classList.add('hidden');
//     btnProxyStop.classList.remove('hidden');
//   } else {
//     spanProxyStatusOn.classList.add('hidden');
//     spanProxyStatusOff.classList.remove('hidden');

//     btnProxyStart.classList.remove('hidden');
//     btnProxyStop.classList.add('hidden');
//   }

//   if (options.activeProxy) {
//     const types = ['http', 'https', 'socks4', 'socks5'];
//     if (options.activeProxy.type) btnProxyType[types.indexOf(options.activeProxy.type)].classList.add('btn-green');
//     inputproxyHost.value = options.activeProxy.host;
//     inputproxyPort.value = options.activeProxy.port;
//   }
// };

// updatePopup(bgP.window.extOptions);

// btnProxyStop.onclick = function () {
//   bgP.window.extOptions.proxyEnabled = false;
//   bgP.window.setOptions(bgP.window.extOptions);
//   bgP.window.disableProxy();
//   updatePopup(bgP.window.extOptions);
// };

// btnProxyStart.onclick = function () {
//   bgP.window.extOptions.activeProxy.host = inputproxyHost.value;
//   bgP.window.extOptions.activeProxy.port = inputproxyPort.value;
//   bgP.window.extOptions.proxyEnabled = true;
//   bgP.window.setOptions(bgP.window.extOptions);
//   bgP.window.setProxy(bgP.window.extOptions.activeProxy);
//   updatePopup(bgP.window.extOptions);
// };

// let displayAlert = (type, msg) => {
//   if (type === 'error') {
//     document.getElementById('exAlertBox').classList.remove('alert-success');
//     document.getElementById('exAlertBox').classList.add('alert-warning');
//   } else if (type === 'success') {
//     document.getElementById('exAlertBox').classList.remove('alert-warning');
//     document.getElementById('exAlertBox').classList.add('alert-success');
//   }

//   document.getElementById('alertMsg').innerHTML = msg;
//   document.getElementById('exAlert').classList.remove('hidden');
// };

// let closeAlert = () => {
//   const alert = document.getElementById('exAlert');
//   if (alert) {
//     document.getElementById('exAlert').classList.add('hidden');
//   }
// };
// closeAlert();

// btn_close_alert.addEventListener('click', function () {
//   closeAlert();
// });

const myTabs = document.querySelectorAll('ul.nav-tabs > li');
function myTabClicks(tabClickEvent) {
  for (let i = 0; i < myTabs.length; i++) {
    myTabs[i].classList.remove('active');
  }

  const clickedTab = tabClickEvent.currentTarget;
  clickedTab.classList.add('active');
  tabClickEvent.preventDefault();

  const myContentPanes = document.querySelectorAll('.tab-pane');

  for (let i = 0; i < myContentPanes.length; i++) {
    myContentPanes[i].classList.remove('active');
  }

  const anchorReference = tabClickEvent.target;
  const activePaneId = anchorReference.getAttribute('href');
  const activePane = document.querySelector(activePaneId);
  activePane.classList.add('active');
}

for (let i = 0; i < myTabs.length; i++) {
  myTabs[i].addEventListener('click', myTabClicks);
}

const imgURL = chrome.runtime.getURL("images/BDB-ICON256.png");
document.getElementById("logo").src = imgURL;
