import React, {useContext, useState} from "react";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [succesfulFetchIP, setSuccesfulFetchIP] = useState(false);
    const [succesfulFetchSun, setSuccesfulFetchSun] = useState(false);
    const [succesfulFetchWeather, setSuccesfulFetchWeather] = useState(false);
    const [fetchDataIP, setfetchDataIP] = useState("");
    const [fetchDataSun, setfetchDataSun] = useState("");
    const [fetchDataWeather, setFetchDataWeather] = useState("");
    return (
        <AppContext.Provider value={{succesfulFetchIP,setSuccesfulFetchIP, succesfulFetchSun,setSuccesfulFetchSun, fetchDataIP,setfetchDataIP, fetchDataSun,setfetchDataSun, succesfulFetchWeather,setSuccesfulFetchWeather,fetchDataWeather, setFetchDataWeather}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
export { AppContext, AppProvider }