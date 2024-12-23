// theme/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import * as SecureStore from "expo-secure-store";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = Appearance.getColorScheme() || "light";
  const [theme, setTheme] = useState<Theme>(colorScheme);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await SecureStore.getItemAsync("theme");
      if (savedTheme) {
        setTheme(savedTheme as Theme);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await SecureStore.setItemAsync("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
