import{createContext} from 'react'

export const themes = {
    primary:{
        background: 'efefef',
        color: '000'
    },
    secondary:{
        background: '000',
        color: 'efefef'
    },
}

export const ThemeContext = createContext(themes.primary)