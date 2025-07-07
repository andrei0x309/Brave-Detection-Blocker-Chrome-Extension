# Brave Detection Block BDB (chrome extension)&#x3a;

To increase the effectiveness of this extension, please make sure you also turn off both Solana and Ethereum Brave Wallet from your browser settings, as they both leave detectable traces as `window.solanaBrave`.

Turn off Brave Wallets screenshot:

![TURN OFF BRAVE WALLET](/turn-off-brave-wallet.png?raw=true "TURN OFF BRAVE WALLET")

If you want to use an ETH wallet I also wrote an open-source implementation of EVM wallet  [Clear EVM Wallet](https://github.com/andrei0x309/clear-wallet) that has ZERO tracking and can replace Brave wallet providing more privacy.

![BDB LOGO](/images/BDB-ICON256.png?raw=true "BDB LOGO")

IMO Brave browser is a good privacy browser despite that it exposes some data that can allow websites to identify you are using Brave.

The most common method of detecting that you run Brave browser involves checking a custom property on the navigator object, accessible at `window.navigator.brave`.

This extension will remove that property and make it impossible for websites to detect you are using Brave using the most common method of detecting you have Brave.

Download from Chrome-Store(only download if you are running Brave)&#x3a;

[Brave-Detection-Blocker-Chrome-Extension](https://chrome.google.com/webstore/detail/brave-detection-block/ckkhcgikplgdginlidcaomgjahmddjgb)

## ChangeLog &#x3a;

Changelog file [CHANGELOG.MD](CHANGELOG.md)

## Privacy Policy Link&#x3a;

[PRIVACY_POLICY.md](PRIVACY_POLICY.md)

### License&#x3a;

MIT

### Notes&#x3a;

This extension is compatible with extensions that change the User-Agent.
More information about how websites detect Brave is available at this issue: [https://github.com/andrei0x309/Brave-Detection-Blocker-Chrome-Extension/issues/1](https://github.com/andrei0x309/Brave-Detection-Blocker-Chrome-Extension/issues/1)

### 𝐂𝐨𝐧𝐭𝐚𝐜𝐭&#x3a;

Discord: andrei0x309
Website: [https://flashsoft.eu](https://flashsoft.eu)
Github: [andrei0x309](https://github.com/andrei0x309)
