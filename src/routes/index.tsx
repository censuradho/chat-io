import { paths } from '@/constants/paths';
import { SignInPage } from '@/pages';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom'

export function Routes () {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={paths.home} component={SignInPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  )
}