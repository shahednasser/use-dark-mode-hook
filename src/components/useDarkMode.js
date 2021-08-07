import { useState, useEffect } from 'react'

export const useDarkMode = function ({initialValue = false, darkModeClass = 'dark', lightModeClass = 'light', element = 'body', debug = false} = {}) {
    const [isDarkMode, setDarkMode] = useState(initialValue)
    const [elm, setElm] = useState(null)
    const [_document, setDocument] = useState(null)

    const toggleDarkMode = function (on = true) {
        const theme = on ? darkModeClass : lightModeClass
        if (elm && !elm.classList.contains(theme)) {
            elm.classList.add(theme)
            const oppositeTheme = on ? lightModeClass : darkModeClass
            if (elm.classList.contains(oppositeTheme)) {
                elm.classList.remove(oppositeTheme)
            }
        }
        localStorage.setItem('theme', theme)
        if (isDarkMode !== on) {
            setDarkMode(on)
        }
    }

    useEffect(() => {
        setDocument(document);
    }, [])

    useEffect(() => {
        if (_document) {
            setElm(_document.querySelector(element));
        }
    }, [element, _document])

    useEffect(() => {
        if (debug) {
            if (!elm) {
                console.error(`useDarkMode ERROR: ${element} is not defined in the document`)
                return
            } else {
                console.log(`useDarkMode: ${element} is set.`);
            }
        }
    }, [elm, debug])

    useEffect(() => {
        let theme = localStorage.getItem('theme')
        if (!theme) {
            theme = lightModeClass //default value
        }
        toggleDarkMode(theme === darkModeClass)
    }, [lightModeClass, darkModeClass, elm])

    return [isDarkMode, toggleDarkMode]
}