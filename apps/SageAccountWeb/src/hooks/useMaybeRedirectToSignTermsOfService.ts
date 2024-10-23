import { TermsOfServiceState } from '@sage-bionetworks/synapse-types'
import { useEffect, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  storeLastPlace,
  useApplicationSessionContext,
} from 'synapse-react-client'

type UseMaybeRedirectToSignTermsOfServiceReturn = {
  // if true, the user may be redirected (or has already been redirected) to sign the ToS
  // i.e. don't assume the ToS has been signed and boot the user to the original app until this returns false!
  mayRedirect: boolean
}

export default function useMaybeRedirectToSignTermsOfService(): UseMaybeRedirectToSignTermsOfServiceReturn {
  // Detect if terms of service are up to date.  If not, route to either the Pledge or a page where the user can sign the updated terms.
  // Note, if the status is "MUST_AGREE_SOON", then the new page will offer a "Skip" button
  const skippedSigningUpdatedToS =
    sessionStorage.getItem('skippedSigningToS') === 'true'
  const { termsOfServiceStatus } = useApplicationSessionContext()

  const history = useHistory()
  const location = useLocation()

  // true until we confirm we will not redirect
  const mayRedirect = useRef(true)

  useEffect(() => {
    if (termsOfServiceStatus) {
      if (
        termsOfServiceStatus.userCurrentTermsOfServiceState !=
          TermsOfServiceState.UP_TO_DATE &&
        !skippedSigningUpdatedToS
      ) {
        if (
          termsOfServiceStatus.lastAgreementDate == undefined &&
          location.pathname != '/authenticated/signTermsOfUse'
        ) {
          history.push('/authenticated/signTermsOfUse')
        } else if (
          termsOfServiceStatus.lastAgreementDate != null &&
          location.pathname != '/authenticated/signUpdatedTermsOfUse'
        ) {
          storeLastPlace()
          history.push('/authenticated/signUpdatedTermsOfUse')
        }
      }
      mayRedirect.current = false
    }
  }, [
    termsOfServiceStatus,
    skippedSigningUpdatedToS,
    location.pathname,
    history,
  ])

  return { mayRedirect: mayRedirect.current }
}
