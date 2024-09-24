// app/components/ThemeSwitcher.tsx
"use client";

import useSystemTheme from "@/hooks/useSystemTheme";
import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;

  return (
    <div>
        <Switch
      defaultSelected
      size="lg"
      color="secondary"
      endContent={<IconMoon/>}
     startContent={<IconSun />}
     isSelected = { theme === "light"}
     onValueChange={()=> {
      return  theme === "dark" ? setTheme("light") : setTheme("dark");
     }}
    >
    </Switch>
    </div>
  );
};