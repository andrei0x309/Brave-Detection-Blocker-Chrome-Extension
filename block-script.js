if(window?.navigator?.brave) {
    Object.keys(window.navigator).reduce((object, key) => {
        if (key !== 'brave' || key !== 'braveSolana') {
            object[key] = window.navigator[key]
        }
        return object
    }, {})
}
