import { Teste } from "@/components/teste"
import { globalStyle } from "./stitches.config"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    globalStyle()
  }, [])
  return (
    <Teste />
  )
}

export default App
