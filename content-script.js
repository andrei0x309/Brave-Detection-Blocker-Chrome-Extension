const nullthrows = (v) => {
    if (v == null) throw new Error('it\'s a null')
    return v
}

const injectScript = (src) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = function () {
        this.remove()
    }
    try {
        nullthrows(document.head || document.documentElement).prepend(script)
    } catch {
        // ignore
    }
}

injectScript(chrome.runtime.getURL('/block-script.js'))
