import { Box, Icon, Typography } from '@/components'
import { IonContent, IonPage } from '@ionic/react'

import * as Styles from './styles'

export function SignInPage () {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <Styles.Container>
          <Box 
            flexDirection="column" 
            gap={0.5} 
            alignItems="center"
          >
            <Typography 
              as="h1"
              size="xlg" 
              color="heading"
              fontWeight="600"
            >Hello 👋</Typography>
            <Typography
              as="p"
              size="sm"
              color="text"
            >
              Sign In with social network
            </Typography>
          </Box>
          <Styles.Content>
            <Box gap={1} flexWrap="wrap">
              <Styles.SocialButtonIcon>
                <Icon name="google" />
              </Styles.SocialButtonIcon>
              <Styles.SocialButtonIcon>
                <Icon name="apple" />
              </Styles.SocialButtonIcon>
              <Styles.SocialButtonIcon>
                <Icon name="twitter" />
              </Styles.SocialButtonIcon>
              <Styles.SocialButtonIcon>
                <Icon name="github" />
              </Styles.SocialButtonIcon>
            </Box>

          </Styles.Content>
        </Styles.Container>
      </IonContent>
    </IonPage>
  )
}