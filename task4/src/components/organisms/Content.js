import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
function Content() {
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
        <div
            style={{
                padding:50,
                textAlign:"center",
                background:
                    theme === "Light"
                        ? "white"
                        : "black",
                color:
                    theme === "Light"
                        ? "black"
                        : "white"
            }}
        >
            <h2>This is Content</h2>
            <p>
                This content changes automatically.
            </p>
        </div>
    );
}
export default Content;