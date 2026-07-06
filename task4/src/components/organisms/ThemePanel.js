import { useEffect, useState } from "react";
import ThemeService from "../../services/ThemeService";
import ThemeLabel from "../molecules/ThemeLabel";
import Button from "../atoms/Button";
function ThemePanel() {
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
                padding:20,
                textAlign:"center"
            }}
        >
            <ThemeLabel theme={theme}/>
            <Button
                text="Toggle Theme"
                onClick={() =>
                    ThemeService.toggleTheme()
                }
            />
        </div>
    );
}
export default ThemePanel;