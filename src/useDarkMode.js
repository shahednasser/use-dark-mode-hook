import { useState, useEffect } from 'react'

function useDarkMode ({initialValue = false, darkModeClass = 'dark', lightModeClass = 'light', element = 'body'} = {}) {
    const [isDarkMode, setDarkMode] = useState(initialValue)
    const elm = document.querySelector(element)

    const toggleDarkMode = function (on = true) {
        setDarkMode(on)
    }

    useEffect(() => {
        let theme = localStorage.getItem('theme')
        if (!theme) {
            theme = lightModeClass //default value
        }
        toggleDarkMode(theme === darkModeClass)
    }, [lightModeClass, darkModeClass])

    useEffect(() => {
        const theme = isDarkMode ? darkModeClass : lightModeClass
        if (!elm.classList.contains(theme)) {
            elm.classList.add(theme)
            const oppositeTheme = isDarkMode ? lightModeClass : darkModeClass
            if (elm.classList.contains(oppositeTheme)) {
                elm.classList.remove(oppositeTheme)
            }
        }
        localStorage.setItem('theme', theme)
    }, [isDarkMode, elm, darkModeClass, lightModeClass])
    
    if (!elm) {
        console.error(`useDarkMode ERROR: ${element} is not defined in the document`)
        return
    }

    return [isDarkMode, toggleDarkMode]
}

export default useDarkMode