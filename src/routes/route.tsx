import { useAuth } from "@/lib/firebase/auth";
import { IonRoute, IonRouteProps } from "@ionic/react";
import { ComponentType } from 'react';

type RouteProps = Omit<IonRouteProps, 'render'> & {
  component: ComponentType
  renderWhenAuth?: boolean
}

export function Route (props: RouteProps) {
  const [auth] = useAuth()

  const {
    component: Component,
    renderWhenAuth = false,
    ...otherProps
  } = props

  if (!renderWhenAuth && auth) return <></>

  return (
    <IonRoute {...otherProps} render={(params) => <Component {...params} />}/>
  )
}