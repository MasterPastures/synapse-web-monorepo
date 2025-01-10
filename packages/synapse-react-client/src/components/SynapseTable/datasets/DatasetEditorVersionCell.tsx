import { EntityRef } from '@sage-bionetworks/synapse-types'
import { CellContext } from '@tanstack/react-table'
import { SyntheticEvent, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useGetVersionsInfinite } from '../../../synapse-queries/index'
import { DatasetItemsEditorTableData } from './DatasetItemsEditor'

type DatasetEditorVersionCellProps = CellContext<
  DatasetItemsEditorTableData,
  unknown
> & {
  toggleSelection: (entity: EntityRef) => void
}

export function DatasetEditorVersionCell(props: DatasetEditorVersionCellProps) {
  const { row, toggleSelection } = props
  const { entityId, versionNumber } = row.original

  const {
    data: versionData,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetVersionsInfinite(entityId, {
    staleTime: 60 * 1000, // 60 seconds
  })
  const versions = versionData?.pages.flatMap(page => page.results) ?? []
  const currentVersionHasBeenRetrieved = !!versions.find(
    version => version.versionNumber === versionNumber,
  )
  useEffect(() => {
    if (!currentVersionHasBeenRetrieved && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage()
    }
  }, [
    currentVersionHasBeenRetrieved,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  ])

  if (isError) {
    return <>{versionNumber}</>
  }

  return (
    <div>
      {versions && versions.length > 0 && (
        <Form.Control
          role="listbox"
          size="sm"
          as="select"
          value={versionNumber}
          onClick={(event: SyntheticEvent<HTMLSelectElement>) => {
            event.stopPropagation()
          }}
          onChange={event => {
            event.stopPropagation()
            const version = parseInt(event.target.value)
            toggleSelection({
              entityId: entityId,
              versionNumber: version,
            })
          }}
        >
          {
            /* The selected version number doesn't exist */
            !currentVersionHasBeenRetrieved &&
              !hasNextPage &&
              !isFetchingNextPage && (
                <option disabled key={versionNumber} value={versionNumber}>
                  {versionNumber} (Not Found)
                </option>
              )
          }
          {versions.map(version => {
            return (
              <option key={version.versionNumber} value={version.versionNumber}>
                {version.versionNumber}
                {version.isLatestVersion && ' (Latest)'}
              </option>
            )
          })}
        </Form.Control>
      )}
    </div>
  )
}