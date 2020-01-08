import { Link } from 'react-router-dom'
import * as React from 'react'
import routesConfig from './config/routesConfig'
import { GenericRoute } from '.types/portal-config'
import logoHeaderConfig from './config/logoHeaderConfig'
import Dialog from '@material-ui/core/Dialog'
import Dropdown from 'react-bootstrap/Dropdown'
import {
  SynapseComponents,
  SynapseClient,
  SynapseConstants,
} from 'synapse-react-client'
import UserCard from 'synapse-react-client/dist/containers/UserCard'
import { TokenContext, SignInProps } from './AppInitializer'
import SvgIcon from '@material-ui/core/SvgIcon'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'
import { UserProfile } from 'synapse-react-client/dist/utils/synapseTypes/'

export type NavbarState = {
  showLoginDialog: boolean
  token: string | undefined
  userProfile: UserProfile | undefined
}

type SynapseSettingLink = {
  text: string
  hasBorder?: boolean
  settingSubPath?: string
}

export class Navbar extends React.Component<{}, NavbarState> {
  synapseQuickLinks: SynapseSettingLink[] = [
    {
      text: 'Profile',
    },
    {
      text: 'Projects',
      settingSubPath: 'projects',
    },
    {
      text: 'Teams',
      settingSubPath: 'teams',
    },
    {
      text: 'Challenges',
      settingSubPath: 'challenges',
    },
    {
      text: 'Downloads',
      settingSubPath: 'downloads',
      hasBorder: true,
    },
    {
      text: 'Settings',
      settingSubPath: 'settings',
      hasBorder: true,
    },
  ]

  constructor(props: SignInProps) {
    super(props)
    const state: NavbarState = {
      token: undefined,
      userProfile: undefined,
      showLoginDialog: false,
    }
    this.state = state
  }

  // given the hash, decide if the link should have a bottom border
  getBorder = (name: string) => {
    if (name === '') {
      // special case the home page
      return
    }
    const hash = window.location.hash.substring(2)
    return hash.includes(name) ? 'bottom-border' : ''
  }
  componentDidMount() {
    this.getUserProfile()
  }
  componentDidUpdate() {
    this.getUserProfile()
  }
  getUserProfile = () => {
    const newToken = this.context
    if (
      newToken &&
      (!this.state.userProfile || this.state.token !== newToken)
    ) {
      SynapseClient.getUserProfile(newToken)
        .then(userProfile => {
          if (userProfile.profilePicureFileHandleId) {
            userProfile.clientPreSignedURL = `https://www.synapse.org/Portal/filehandleassociation?associatedObjectId=${userProfile.ownerId}&associatedObjectType=UserProfileAttachment&fileHandleId=${userProfile.profilePicureFileHandleId}`
          }
          this.setState({
            userProfile,
            token: newToken,
          })
        })
        .catch(_err => {
          console.error('user profile could not be fetched ', _err)
        })
    }
  }

  render() {
    const goToTop = (_event: any) => {
      window.scroll({ top: 0 })
    }
    const { onSignIn, handleCloseLoginDialog, showLoginDialog } = this
      .props as SignInProps
    const { name, icon } = logoHeaderConfig
    const imageElement = icon ? (
      <img alt="navigation logo" className="nav-logo" src={icon} />
    ) : (
      <></>
    )
    const nameElement = name ? (
      <span style={{ marginLeft: 10 }}>{name}</span>
    ) : (
      <></>
    )
    const hostname = window.location.hostname.toLowerCase()
    // for now, we only support login in the dev environment (localstorage) or from a .synapse.org subdomain (http-only secure cookie)
    const isSynapseSubdomainOrLocal =
      hostname.includes('.synapse.org') ||
      hostname.includes('127.0.0.1') ||
      hostname.includes('localhost')
    const { userProfile } = this.state
    return (
      <React.Fragment>
        <nav className="flex-display nav">
          <div className="center-content nav-logo-container">
            <Link
              onClick={goToTop}
              style={{ display: 'flex', alignItems: 'center' }}
              to="/"
              id="home-link"
            >
              {' '}
              {imageElement} {nameElement}{' '}
            </Link>
          </div>
          <div className="nav-link-container">
            {!userProfile && isSynapseSubdomainOrLocal && (
              <div className="center-content nav-button">
                <button
                  id="signin-button"
                  className="SRC-primary-text-color-background"
                  // @ts-ignore
                  onClick={onSignIn}
                >
                  SIGN&nbsp;IN
                </button>
                <Dialog
                  // @ts-ignore
                  onClose={handleCloseLoginDialog}
                  open={showLoginDialog}
                >
                  <SynapseComponents.Login
                    token={this.state.token}
                    theme={'light'}
                    icon={true}
                  />
                </Dialog>
              </div>
            )}
            {userProfile && (
              <Dropdown>
                <Dropdown.Toggle variant="light" id="user-menu-button">
                  <UserCard
                    userProfile={userProfile}
                    size={SynapseConstants.SMALL_USER_CARD}
                    preSignedURL={userProfile.clientPreSignedURL}
                    hideText={true}
                    link="javascript:void(0)"
                  />
                  <SvgIcon>
                    {
                      // Material expand more svg https://material.io/tools/icons/?icon=expand_more&style=baseline
                    }
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                  </SvgIcon>
                </Dropdown.Toggle>
                <Dropdown.Menu className="user-menu-dropdown portal-nav-menu">
                  <Dropdown.Item className="SRC-primary-background-color-hover SRC-nested-color center-content border-bottom-1">
                    Signed in as&nbsp;<strong>{userProfile.userName}</strong>
                  </Dropdown.Item>
                  {this.synapseQuickLinks.map(el => {
                    const borderBottomClass = el.hasBorder
                      ? 'border-bottom-1'
                      : ''
                    return (
                      <Dropdown.Item
                        key={el.text}
                        className={`SRC-primary-background-color-hover SRC-nested-color center-content ${borderBottomClass}`}
                        href={`https://www.synapse.org/#!Profile:${
                          userProfile.ownerId
                        }${el.settingSubPath ? `/${el.settingSubPath}` : ''}`}
                      >
                        {el.text}
                      </Dropdown.Item>
                    )
                  })}
                  <Dropdown.Item
                    className="SRC-primary-background-color-hover SRC-nested-color center-content"
                    // @ts-ignore
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
            {// we have to loop backwards due to css rendering of flex-direction: row-reverse
            routesConfig
              .slice()
              .reverse()
              .map(el => {
                const displayName = el.displayName ? el.displayName : el.name
                const icon = (
                  <img style={{ padding: '0px 4px' }} src={el.icon} />
                )
                if (el.hideRouteFromNavbar) {
                  return false
                }
                if (el.isNested) {
                  // handle the case when the menu has sub options
                  const plainRoutes = el.routes as GenericRoute[]
                  return (
                    <Dropdown className={this.getBorder(el.name)}>
                      <Dropdown.Toggle
                        variant="light"
                        id={displayName}
                        className="center-content nav-button-container nav-button"
                      >
                        {displayName}
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="portal-nav-menu">
                        {plainRoutes.map(route => {
                          if (route.hideRouteFromNavbar) {
                            return false
                          }
                          const routeDisplayName =
                            route.displayName || route.name
                          return (
                            <Dropdown.Item
                              key={route.name}
                              className="SRC-primary-background-color-hover SRC-nested-color center-content"
                              href={`#${route.to}`}
                            >
                              {routeDisplayName}
                            </Dropdown.Item>
                          )
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  )
                }
                // treat it as standard anchor tag
                if (el.synapseConfigArray.length === 0) {
                  return (
                    <a
                      key={el.name}
                      className={`center-content nav-button nav-button-container ${this.getBorder(
                        el.name,
                      )}`}
                      href={el.to}
                    >
                      {' '}
                      {icon} {displayName}{' '}
                    </a>
                  )
                }
                return (
                  <Link
                    key={el.name}
                    className={`center-content nav-button nav-button-container ${this.getBorder(
                      el.name,
                    )}`}
                    to={el.to}
                  >
                    {' '}
                    {displayName}{' '}
                  </Link>
                )
              })}
          </div>
        </nav>
        <div className="spacer" />
      </React.Fragment>
    )
  }
}
Navbar.contextType = TokenContext
