import { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components';

import theme from "../../styles/Theme";

interface IAppThemeContext {
  currentTheme?: string;
  setCurrentTheme?: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const AppThemeContext = createContext<IAppThemeContext>({});

interface IAppThemeProvider {
  children?: React.ReactNode;
}

function AppThemeProvider({ children }: IAppThemeProvider) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  return (
    <AppThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme[currentTheme ?? 'light']}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export {
  AppThemeContext,
  AppThemeProvider
}