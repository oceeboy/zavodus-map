import { ThemeProvider } from "@/providers/ThemeProvider";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { SFPro } from "@/constants/fonts";

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontLoaded, fontLoadError] = useFonts({
    // SF Pro Display Fonts
    "SFProDisplay-Black": SFPro.display.black,
    "SFProDisplay-Bold": SFPro.display.bold,
    "SFProDisplay-Heavy": SFPro.display.heavy,
    "SFProDisplay-Light": SFPro.display.light,
    "SFProDisplay-Medium": SFPro.display.medium,
    "SFProDisplay-Regular": SFPro.display.regular,
    "SFProDisplay-Semibold": SFPro.display.semibold,
    "SFProDisplay-Thin": SFPro.display.thin,

    // SF Pro Rounded Fonts
    "SFProRounded-Black": SFPro.rounded.black,
    "SFProRounded-Bold": SFPro.rounded.bold,
    "SFProRounded-Heavy": SFPro.rounded.heavy,
    "SFProRounded-Light": SFPro.rounded.light,
    "SFProRounded-Medium": SFPro.rounded.medium,
    "SFProRounded-Regular": SFPro.rounded.regular,
    "SFProRounded-Semibold": SFPro.rounded.semibold,
    "SFProRounded-Thin": SFPro.rounded.thin,
    "SFProRounded-Ultralight": SFPro.rounded.ultralight,

    // SF Pro Text Fonts
    "SFProText-Black": SFPro.text.black,
    "SFProText-Bold": SFPro.text.bold,
    "SFProText-Heavy": SFPro.text.heavy,
    "SFProText-Light": SFPro.text.light,
    "SFProText-Medium": SFPro.text.medium,
    "SFProText-Regular": SFPro.text.regular,
    "SFProText-Semibold": SFPro.text.semibold,
    "SFProText-Thin": SFPro.text.thin,
    "SFProText-Ultralight": SFPro.text.ultralight,
  });

  useEffect(() => {
    if (fontLoaded || fontLoadError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontLoadError]);

  if (!fontLoaded && !fontLoadError) {
    return null;
  }
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="stacks" />
      </Stack>
    </ThemeProvider>
  );
}
