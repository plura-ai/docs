import { useTheme } from "next-themes";
import { Switch } from "../ui/switch";

export default function CustomSideFooter() {
  const { theme, setTheme } = useTheme();

  const handleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="p-4 w-full">
      <div className="w-full flex items-center justify-start">
        <Switch
          id="theme-toggle"
          checked={theme === "dark"}
          onCheckedChange={handleTheme}
        />
      </div>
    </div>
  );
}
