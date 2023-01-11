// create a context 
// provider 
// consumer => useContext Hook 
import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{myName: "Usman Malik"}}> {children} </AppContext.Provider>

};

// Custom Hooks 
const useProductContext = () => {
    return useContext(AppContext);
};


export { AppProvider, AppContext, useProductContext };