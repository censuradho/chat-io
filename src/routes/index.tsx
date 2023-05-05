import { paths } from '@/constants/paths';
import { SignInPage } from '@/pages';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom'
import { ChatRoutes } from './chat';

export function Routes () {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <ChatRoutes />
        {/* <Route path={paths.home} component={SignInPage} /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  )
}