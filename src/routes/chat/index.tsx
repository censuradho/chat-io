import { Route } from "react-router-dom";
import { History } from "./components";

import * as Styles from './styles'
import { paths } from "@/constants/paths";
import { ChatPage } from "@/pages";

export function ChatRoutes () {
  return (
    <Styles.Container>
      <History />
      <Route path={paths.chat} component={ChatPage} />
    </Styles.Container>
  )
}