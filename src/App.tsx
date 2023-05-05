import '@ionic/react/css/core.css';

import { useEffect } from "react";

import { globalStyle } from "./stitches.config";

import { IonApp, setupIonicReact } from '@ionic/react';
import { Routes } from "./routes";

setupIonicReact();


function App() {
  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <IonApp>
      <Routes />
    </IonApp>
  )
}

export default App
