import { Box } from '@mui/material'
import React from 'react'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import {
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_GOOGLE,
  OAUTH2_PROVIDERS,
} from '../../utils/SynapseConstants'
import LoginMethodButton from './LoginMethodButton'

type AuthenticationMethodSelectionProps = {
  ssoRedirectUrl?: string
  /* Invoked before redirecting to Google. Useful in portals where we may want to store the current URL to redirect back here. */
  onBeginOAuthSignIn?: () => void
  onSelectUsernameAndPassword: () => void
}

/**
 *  To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs for Synapse authentication.
 *  This can be done by visiting https://sagebionetworks.jira.com/servicedesk/customer/portal/9 to set up a collaboration.
 *  Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.
 */
export default function AuthenticationMethodSelection(
  props: AuthenticationMethodSelectionProps,
) {
  const { onBeginOAuthSignIn, ssoRedirectUrl, onSelectUsernameAndPassword } =
    props
  function onGoogleSignIn(event: React.MouseEvent<HTMLButtonElement>) {
    if (onBeginOAuthSignIn) {
      onBeginOAuthSignIn()
    }

    event.preventDefault()
    const redirectUrl = ssoRedirectUrl
      ? `${ssoRedirectUrl}${OAUTH2_PROVIDERS.GOOGLE}`
      : `${SynapseClient.getRootURL()}?provider=${OAUTH2_PROVIDERS.GOOGLE}`
    SynapseClient.oAuthUrlRequest(OAUTH2_PROVIDERS.GOOGLE, redirectUrl)
      .then(data => {
        // Send the user to the authorization URL
        window.location = data.authorizationUrl as unknown as Location
      })
      .catch((err: SynapseClientError) => {
        console.log('Error on oAuth url ', err)
      })
  }

  return (
    <Box>
      <LoginMethodButton
        loginMethod={LOGIN_METHOD_OAUTH2_GOOGLE}
        iconName="google24"
        onClick={onGoogleSignIn}
      />
      <LoginMethodButton
        loginMethod={LOGIN_METHOD_EMAIL}
        iconName="email"
        onClick={onSelectUsernameAndPassword}
      />
    </Box>
  )
}
