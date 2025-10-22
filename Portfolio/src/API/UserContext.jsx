import { createContext, useState, useEffect } from "react";

// 1. Create the context
const UserContext = createContext();

// 2. Create the provider component
function UserProvider({ children }) {
    // Get theme from localStorage or default to light
    const currentTheme = localStorage.getItem("current_theme") || "light";
    const [theme, setTheme] = useState(currentTheme);

    // Save theme to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("current_theme", theme);
    }, [theme]);

    return (
        <UserContext.Provider value={{ theme, setTheme }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
