import React, {createContext, useState} from 'react'

const defaultConfig = {
    duration: 12,
    memory: 5,
    upfront: false
}

export const ConfigContext = createContext(defaultConfig);

const ConfigContextProvider = (props) => {
    const [config, setConfig] = useState(defaultConfig)

    return (
        <ConfigContext.Provider value={{config, setConfig}}>
            {props.children}
        </ConfigContext.Provider>
    )
}

export default ConfigContextProvider;
