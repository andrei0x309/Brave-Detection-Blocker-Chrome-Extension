if(window?.navigator?.brave) {
    try {
        delete window.navigator.__proto__.brave
    } catch {
        // do nothing
    }
}
