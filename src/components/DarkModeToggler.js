import React from 'react'
import * as DarkIcon from './icons/dark.svg'
import * as LightIcon from './icons/light.svg'

function DarkModeToggler({isDarkMode, toggleDarkMode, buttonClassName = ""}) {
    return (
        <button className={buttonClassName} onClick={() => toggleDarkMode(!isDarkMode)}>
            {isDarkMode ? <DarkIcon /> : <LightIcon />}
        </button>
    )
}

export default DarkModeToggler