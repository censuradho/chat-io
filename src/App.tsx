import { useEffect } from "react"

import { Teste } from "@/components/teste"
import { globalStyle } from "./stitches.config"

import '@ionic/react/css/core.css';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {
  useEffect(() => {
    globalStyle()
  }, [])
  return (
    <Teste />
  )
}

export default App
