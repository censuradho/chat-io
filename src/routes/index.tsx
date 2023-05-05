import { SignInPage } from '@/pages';
import { IonRoute, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

export function Routes () {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <IonRoute path="/" render={() => <SignInPage />}/>
      </IonRouterOutlet>
    </IonReactRouter>
  )
}