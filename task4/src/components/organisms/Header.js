import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
function Header() {
    const [theme, setTheme] = useState(
        ThemeService.getTheme()
    );
    useEffect(() => {
        const updateTheme = (newTheme) => {
            setTheme(newTheme);
        };
        ThemeService.attach(updateTheme);
        return () => {
            ThemeService.detach(updateTheme);
        };
    }, []);
    return (
        <header
            style={{
                padding: 20,
                background:
                    theme === "Light"
                        ? "#dddddd"
                        : "#333333",
                color:
                    theme === "Light"
                        ? "black"
                        : "white"
            }}
        >
            <h1>Theme Switcher</h1>
            <h2>Current Theme : {theme}</h2>
        </header>
    );
}
export default Header;