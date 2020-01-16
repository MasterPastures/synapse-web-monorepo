import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle,
  faDatabase,
  faLink,
  faMinusCircle,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import { SynapseClient } from '../utils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../utils/functions/getEndpoint'
import {
  FileHandle,
  RestrictableObjectType,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
  RestrictionLevel,
} from '../utils/synapseTypes/'
import { TOOLTIP_DELAY_SHOW } from './table/SynapseTableConstants'
library.add(faUnlockAlt)
library.add(faMinusCircle)
library.add(faDatabase)
library.add(faCircle)

export type HasAccessProps = {
  fileHandle?: FileHandle
  entityId: string
  token?: string
}

type HasAccessState = {
  restrictionInformation?: RestrictionInformationResponse
}

export enum ExternalFileHandleConcreteTypeEnum {
  ProxyFileHandle = 'org.sagebionetworks.repo.model.file.ProxyFileHandle',
  ExternalObjectStoreFileHandle = 'org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle',
  ExternalFileHandle = 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
}

export enum GoogleCloudFileHandleEnum {
  GoogleCloudFileHandle = 'org.sagebionetworks.repo.model.file.GoogleCloudFileHandle',
}

export const GIGABYTE_SIZE = 2 ** 30

export enum DownloadTypeEnum {
  CloudFileHandle,
  ExternalFileHandle,
  TooLargeFile,
  NoAccess,
  IsOpenNoUnmetAccessRestrictions,
  HasUnmetAccessRestrictions,
}

export const getFileHandleType = (fileHandle: FileHandle) => {
  const { concreteType, contentSize } = fileHandle
  // check if it's too large
  if (contentSize >= GIGABYTE_SIZE) {
    return DownloadTypeEnum.TooLargeFile
  }
  // check if it's a google cloud file handle
  if (concreteType === GoogleCloudFileHandleEnum.GoogleCloudFileHandle) {
    return DownloadTypeEnum.CloudFileHandle
  }
  // check if it's an external file handle
  const isExternalFileHandle = Object.values<string>(
    ExternalFileHandleConcreteTypeEnum,
  ).includes(concreteType)
  if (isExternalFileHandle) {
    return DownloadTypeEnum.ExternalFileHandle
  }
  // otherwise its open
  return DownloadTypeEnum.IsOpenNoUnmetAccessRestrictions
}

/**
 * HasAccess shows if the user has access.  Additionally has a link to the AR list if user does not have access
 *
 * @export
 * @class HasAccess
 * @extends {React.Component<HasAccessProps, HasAccessState>}
 */
export default class HasAccess extends React.Component<
  HasAccessProps,
  HasAccessState
> {
  public static tooltipText = {
    [DownloadTypeEnum.NoAccess]:
      'Your list has restricted files that can’t be downloaded. You must request access to these restricted files via Access Conditions page. All files will remain in the list and can be downloaded from here once your access is granted.',
    [DownloadTypeEnum.HasUnmetAccessRestrictions]:
      'Your list has restricted files that can’t be downloaded. You must request access to these restricted files via Access Conditions page. All files will remain in the list and can be downloaded from here once your access is granted.',
    [DownloadTypeEnum.TooLargeFile]:
      'Your list contains files that are too large to download as a package and must be downloaded manually. Click on the item to go to the manual download page.',
    [DownloadTypeEnum.ExternalFileHandle]:
      'Your list contains external links, which must be downloaded manually. Clicking on the item will take you to the download page.',
    [DownloadTypeEnum.CloudFileHandle]:
      'Your list contains files that must be downloaded manually (e.g. files in Google Cloud). Clicking on the item will take you to the download page.',
  }

  constructor(props: HasAccessProps) {
    super(props)
    this.state = {}
    this.getRestrictionInformation = this.getRestrictionInformation.bind(this)
  }

  componentDidMount() {
    this.getRestrictionInformation()
  }

  componentDidUpdate() {
    this.getRestrictionInformation()
  }

  getRestrictionInformation = () => {
    const { entityId, token, fileHandle } = this.props
    if (
      this.state.restrictionInformation ||
      !entityId ||
      !token ||
      fileHandle
    ) {
      return
    }
    const request: RestrictionInformationRequest = {
      restrictableObjectType: RestrictableObjectType.ENTITY,
      objectId: entityId,
    }
    SynapseClient.getRestrictionInformation(request, token)
      .then(restrictionInformation => {
        this.setState({
          restrictionInformation,
        })
      })
      .catch(err => {
        console.log('Error on getRestrictionInformation: ', err)
      })
  }

  renderIconHelper = (iconProp: IconProp, classColor: string) => {
    return (
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faCircle} className={classColor} size="2x" />
        <FontAwesomeIcon
          icon={iconProp}
          className="SRC-whiteText"
          size="1x"
          transform={{ x: 6 }}
        />
      </span>
    )
  }

  renderIcon = (downloadType: DownloadTypeEnum) => {
    switch (downloadType) {
      case DownloadTypeEnum.NoAccess:
        return this.renderIconHelper(faMinusCircle, 'SRC-danger-color')
      case DownloadTypeEnum.ExternalFileHandle:
        return this.renderIconHelper(faLink, 'SRC-warning-color')
      case DownloadTypeEnum.CloudFileHandle:
        return this.renderIconHelper(faLink, 'SRC-warning-color')
      case DownloadTypeEnum.HasUnmetAccessRestrictions:
        return this.renderIconHelper(faMinusCircle, 'SRC-warning-color')
      case DownloadTypeEnum.TooLargeFile:
        return this.renderIconHelper(faDatabase, 'SRC-danger-color')
      case DownloadTypeEnum.IsOpenNoUnmetAccessRestrictions:
        return this.renderIconHelper(faUnlockAlt, 'SRC-success-color')
      default:
        throw Error('downloadTypeEnum passed incorrectly')
    }
  }

  // Get type of download
  getDownloadType = () => {
    // check if they have unmet access requirements
    const { restrictionInformation } = this.state
    if (restrictionInformation) {
      const { hasUnmetAccessRequirement } = restrictionInformation
      if (hasUnmetAccessRequirement) {
        return DownloadTypeEnum.HasUnmetAccessRestrictions
      } else {
        return DownloadTypeEnum.IsOpenNoUnmetAccessRestrictions
      }
    }
    // if file handle is present show more detailed download information
    const { fileHandle } = this.props
    if (fileHandle) {
      return getFileHandleType(fileHandle)
    }
    // otherwise no access to this file
    return DownloadTypeEnum.NoAccess
  }

  // Show Access Requirements
  renderARsLink = () => {
    const { restrictionInformation } = this.state
    const { entityId, fileHandle } = this.props
    const hasUnmetAccessRequirement =
      restrictionInformation?.hasUnmetAccessRequirement
    const restrictionLevel = restrictionInformation?.restrictionLevel
    if (fileHandle || hasUnmetAccessRequirement === false) {
      // user has fullfilled everything
      return <></>
    }
    let linkText = ''
    if (RestrictionLevel.RESTRICTED_BY_TERMS_OF_USE === restrictionLevel) {
      linkText = 'View Terms'
    } else if (RestrictionLevel.CONTROLLED_BY_ACT === restrictionLevel) {
      linkText = 'Request Access'
    }
    return (
      <a
        style={{
          fontSize: '14px',
          cursor: 'pointer',
          marginLeft: '16px',
        }}
        className="SRC-primary-text-color"
        href={`${getEndpoint(
          BackendDestinationEnum.PORTAL_ENDPOINT,
        )}#!AccessRequirements:ID=${entityId}&TYPE=ENTITY`}
      >
        {linkText}
      </a>
    )
  }

  render() {
    const downloadType = this.getDownloadType()
    const tooltipText = HasAccess.tooltipText[downloadType]
    const entityId = this.props.entityId
    const icon = this.renderIcon(downloadType)
    const viewARsLink: React.ReactElement = this.renderARsLink()
    return (
      <span style={{ whiteSpace: 'nowrap' }}>
        {tooltipText && (
          <>
            <span tabIndex={0} data-for={entityId} data-tip={tooltipText}>
              {icon}
            </span>
            <ReactTooltip
              delayShow={TOOLTIP_DELAY_SHOW}
              place="top"
              type="dark"
              effect="solid"
              id={entityId}
              className="has-access-tooltip-width"
            />
            {viewARsLink}
          </>
        )}
        {!tooltipText && (
          <>
            {icon} {viewARsLink}
          </>
        )}
      </span>
    )
  }
}
