import React, { useContext,  useState } from 'react'


const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [isDarkMode, setisDarkMode] = useState(false)
    const [visible, setVisible] = useState(false)

    const toggleDark=()=>{
        setisDarkMode(!isDarkMode)
    }

    const close=()=>{
        setVisible(!visible)
    }
    

    return (
        <AppContext.Provider
        value={{
            isDarkMode,
            setisDarkMode,
            toggleDark,
            close,
            visible,
            setVisible
        }}
        >
        {children}
        </AppContext.Provider>
    )
    }
    // make sure use
    export const useGlobalContext = () => {
    return useContext(AppContext)
    }

export { AppContext, AppProvider }