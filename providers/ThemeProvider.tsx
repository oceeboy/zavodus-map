import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";

type Theme = {
  primary: string;
  secondary: string;
  text: {
    primary: string;
  };
  BUTTON: {
    PRIMARY: string;
    SUCCESS: string;
    SECONDARY: string;
    DANGER: string;
    DISABLED: string;
  };
  BOT: {
    BACKGROUND: {
      PRIMARY: string;
      SECONDARY: string;
    };

    TEXT: {
      PRIMARY: string;
      SECONDARY: string;
    };
  };
  colors: {
    primary: string;
    secondary: string;
    black: string;
    white: string;
    border: string;
    apply: string;
    inactive: string;
    neutral: {
      300: string;
      400: string;
    };
    dark: string;
    red: string;
    green: string;
    error: string;
    success: string;
    info: string;
    toastText: {
      success: string;
      error: string;
      info: string;
    };
    toastBg: {
      success: string;
      error: string;
      info: string;
    };
    borderLight: string;
    border_alt: string;
  };
};

const DARK: Theme = {
  primary: "#fff",
  secondary: "#f7f7f7",
  text: {
    primary: "#000",
  },
  BOT: {
    BACKGROUND: {
      PRIMARY: "#F0A04B",
      SECONDARY: "#e0e0e0",
    },
    TEXT: {
      PRIMARY: "#fff",
      SECONDARY: "#000",
    },
  },
  BUTTON: {
    PRIMARY: "#F0A04B",
    SUCCESS: "#4CAF50",
    SECONDARY: "#2196F3",
    DANGER: "#D32F2F",
    DISABLED: "#BDBDBD",
  },
  colors: {
    primary: "#20C997",
    secondary: "#FF7F50",
    black: "#000000",
    white: "#FFFFFF",
    border: "#CBD5E1",
    apply: "#FCB889",
    inactive: "#FDEEE3",
    neutral: {
      300: "#525252",
      400: "#7B7B7B",
    },
    dark: "#0F172A",
    red: "#DC2626",
    green: "#6DC347",
    error: "#E80D0D",
    success: "#6DC347",
    info: "yellow",
    toastText: {
      success: "#00A11F",
      error: "#A11300",
      info: "yellow",
    },
    toastBg: {
      success: "#DAF1DF",
      error: "#F1DADA",
      info: "yellow",
    },
    borderLight: "#F7F7F7",
    border_alt: "#B2B0B0",
  },
};

const LIGHT: Theme = {
  primary: "#fff",
  secondary: "#f7f7f7",
  text: {
    primary: "#000",
  },
  BOT: {
    BACKGROUND: {
      PRIMARY: "#F0A04B",
      SECONDARY: "#e0e0e0",
    },
    TEXT: {
      PRIMARY: "#fff",
      SECONDARY: "#000",
    },
  },
  BUTTON: {
    PRIMARY: "#A0430A",
    SUCCESS: "#4CAF50",
    SECONDARY: "#2196F3",
    DANGER: "#D32F2F",
    DISABLED: "#BDBDBD",
  },
  colors: {
    primary: "#20C997",
    secondary: "#FF7F50",
    black: "#000000",
    white: "#FFFFFF",
    border: "#CBD5E1",
    apply: "#FCB889",
    inactive: "#FDEEE3",
    neutral: {
      300: "#525252",
      400: "#7B7B7B",
    },
    dark: "#0F172A",
    red: "#DC2626",
    green: "#6DC347",
    error: "#E80D0D",
    success: "#6DC347",
    info: "yellow",
    toastText: {
      success: "#00A11F",
      error: "#A11300",
      info: "yellow",
    },
    toastBg: {
      success: "#DAF1DF",
      error: "#F1DADA",
      info: "yellow",
    },
    borderLight: "#F7F7F7",
    border_alt: "#B2B0B0",
  },
};

export const THEME = { LIGHT, DARK };

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>(
    colorScheme === "dark" ? THEME.DARK : THEME.LIGHT
  );

  const value = useMemo(
    () => ({ theme, isDark: colorScheme === "dark" }),
    [theme, colorScheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
