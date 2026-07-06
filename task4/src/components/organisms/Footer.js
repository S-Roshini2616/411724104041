import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
function Footer() {
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
        <footer
            style={{
                padding:20,
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
            Footer Theme : {theme}
        </footer>
    );
}
export default Footer;