import { rest } from 'msw'
import { getEntityHandlers } from './handlers/entityHandlers'
import {
  getCurrentUserCertifiedValidatedHandler,
  getUserProfileHandlers,
} from './handlers/userProfileHandlers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import {
  getAccessRequirementEntityBindingHandlers,
  getAccessRequirementHandlers,
  getAccessRequirementStatusHandlers,
} from './handlers/accessRequirementHandlers'
import { getWikiHandlers } from './handlers/wikiHandlers'
import { getDataAccessRequestHandlers } from './handlers/dataAccessRequestHandlers'
import { getResearchProjectHandlers } from './handlers/researchProjectHandlers'
import { getFileHandlers } from './handlers/fileHandlers'
import { SynapseError } from '../../utils/SynapseError'
import { getDiscussionHandlers } from './handlers/discussionHandlers'
import { getSubscriptionHandlers } from './handlers/subscriptionHandlers'

// Simple utility type that just indicates that the response body could be an error like the Synapse backend may send.
export type SynapseApiResponse<T> = T | SynapseError

const getHandlers = (backendOrigin: string) => [
  rest.options('*', async (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.get(
    `${backendOrigin}/auth/v1/authenticatedOn`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ authenticatedOn: new Date().toISOString() }),
      )
    },
  ),
  ...getEntityHandlers(backendOrigin),
  ...getUserProfileHandlers(backendOrigin),
  getCurrentUserCertifiedValidatedHandler(backendOrigin, true, true),
  ...getWikiHandlers(backendOrigin),
  ...getAccessRequirementHandlers(backendOrigin),
  ...getAccessRequirementEntityBindingHandlers(backendOrigin),
  ...getAccessRequirementStatusHandlers(backendOrigin),
  ...getDataAccessRequestHandlers(backendOrigin),
  ...getResearchProjectHandlers(backendOrigin),
  ...getFileHandlers(backendOrigin),
  ...getDiscussionHandlers(backendOrigin),
  ...getSubscriptionHandlers(backendOrigin),
]

const handlers = getHandlers(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT))

export { handlers, getHandlers }
