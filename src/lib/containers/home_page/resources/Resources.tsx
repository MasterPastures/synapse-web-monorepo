import React from 'react'
import { QueryBundleRequest } from '../../../utils/synapseTypes'
import { SynapseConstants } from '../../../utils'
import { ErrorBanner } from '../../ErrorBanner'
import useGetQueryResultBundle from '../../../utils/hooks/SynapseAPI/useGetQueryResultBundle'
import ResourcesDesktop from './Resources.Desktop'
import ResourcesMobile from './Resources.Mobile'
import useShowDesktop from '../../../utils/hooks/useShowDesktop'
import { getFieldIndex } from '../../../utils/functions/queryUtils'

export type ResourcesProps = {
  entityId: string
  token?: string
}

enum ExpectedColumns {
  NAME = 'Name',
  WIKI = 'Wiki',
}

export type Data = {
  name: string
  ownerId: string
  wikiId: string
}[]

export default function Resources(props: ResourcesProps) {
  const { entityId, token } = props
  const showDesktop = useShowDesktop()

  const queryBundleRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    query: {
      sql: `SELECT Name, Wiki FROM ${entityId} ORDER BY ItemOrder`,
    },
  }
  const { queryResultBundle, error } = useGetQueryResultBundle({
    token,
    queryBundleRequest,
  })

  const nameIndex = getFieldIndex(ExpectedColumns.NAME, queryResultBundle)
  const wikiIndex = getFieldIndex(ExpectedColumns.WIKI, queryResultBundle)
  const data: Data =
    queryResultBundle?.queryResult.queryResults.rows.map(el => {
      const values = el.values
      const name = values[nameIndex]
      const wikiValue = values[wikiIndex] ?? ''
      const split = wikiValue.split('/')
      const ownerId = split[0]
      const wikiId = split[2]
      return {
        name,
        ownerId,
        wikiId,
      }
    }) ?? []
  return (
    <div className="Resources">
      <ErrorBanner error={error} token={token} />
      {showDesktop ? (
        <ResourcesDesktop data={data} token={token} />
      ) : (
        <ResourcesMobile data={data} token={token} />
      )}
    </div>
  )
}
