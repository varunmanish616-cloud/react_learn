import { useContext,createContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    lightTheme:()=>{

    },
    darkTheme:()=>{

    }

})
export const ThemeProvider=ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}


// import { createContext, useContext, useState } from "react";

// // ✅ 1. Create a Context
// export const ThemeContext = createContext({
//   themeMode: "light",
//   lightTheme: () => {},
//   darkTheme: () => {},
// });

// // ✅ 2. Create a Provider component
// export const ThemeProvider = ({ children }) => {
//   const [themeMode, setThemeMode] = useState("light");

//   const lightTheme = () => setThemeMode("light");
//   const darkTheme = () => setThemeMode("dark");

//   return (
//     <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // ✅ 3. Create a custom hook for easy use
// export default function useTheme() {
//   return useContext(ThemeContext);
// }
