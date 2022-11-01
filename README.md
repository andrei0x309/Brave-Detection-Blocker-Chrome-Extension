# Brave Detection Block BDB (chrome extension)&#x3a;

To increase the effectiveness of this extension, please make sure you have also turned both Solana brave wallet and Ethereum brave wallet from your browser settings, as they both leave fingerprints like 'window.solanaBrave'.

Turn off brave wallets screen shot:

![TURN OFF BRAVE WALLET](/turn-off-brave-wallet.png?raw=true "TURN OFF BRAVE WALLET")

I wrote one open-source implementation of EVM wallet here that does ZERO tracking that you can check out [Clear EVM Wallet](https://github.com/andrei0x309/clear-wallet), that implements MetamaskApi though is not metamask to provide more privacy.

![BDB LOGO](/images/BDB-ICON256.png?raw=true "BDB LOGO")

Brave is a good privacy browser despite that it has some features that break some privacy assurances.

One of them is an official method for a website to detect you are running brave.

This method involves a custom property on the navigator object, accessible at `window.navigator.brave`.

This is probably a point where marketing and data collection collides with any privacy concerns.

This extension will block access to that property and make it impossible to detect if you are running Brave browser.

Download from Chrome-Store(only download if you are running Brave)&#x3a;

[Brave-Detection-Blocker-Chrome-Extension](https://chrome.google.com/webstore/detail/brave-detection-block/ckkhcgikplgdginlidcaomgjahmddjgb)

## ChangeLog &#x3a;

Check changelock markdown file [CHANGELOG.MD](CHANGELOG.md)

## Privacy Policy Link&#x3a;

[PRIVACY_POLICY.md](PRIVACY_POLICY.md)

### License&#x3a;

MIT

### Notes&#x3a;

This extension was made to be compatible with [Random User Agent](https://github.com/tarampampam/random-user-agent/) extension.

### 𝐂𝐨𝐧𝐭𝐚𝐜𝐭&#x3a;

Discord: andrei0x309#6562
