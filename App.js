import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { Navigation } from "./src/infrastructure/navigation/index";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// import * as firebase from "firebase";
import { initializeApp, getApps } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import firebaseConfig from "./firebase.config.json";

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldloaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldloaded || !latoLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}
