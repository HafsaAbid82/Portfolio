
// UserProvider.js
import { useState, useEffect } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
    const currentTheme = localStorage.getItem("current_theme") || "light";
    const [theme, setTheme] = useState(currentTheme);

    useEffect(() => {
        localStorage.setItem("current_theme", theme);
    }, [theme]);

    return (
        <UserContext.Provider value={{ theme, setTheme }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;

