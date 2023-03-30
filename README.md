[![npm version](https://badge.fury.io/js/synapse-react-client.svg)](https://badge.fury.io/js/synapse-react-client)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# synapse-web-monorepo

A monorepo for TypeScript projects related to [Synapse.org](https://www.synapse.org/), a service provided by [Sage Bionetworks](https://sagebionetworks.org/).

## Installation

We're using [pnpm](https://pnpm.io/) for dependency management and [Nx](https://nx.dev/) for builds.

After cloning the repository, install dependencies with `pnpm i`.

You can build all packages with `pnpm build`.

You can test all packages with `pnpm test`.

For project-specific commands, see the relevant `package.json` in each project folder.

## Project Structure

We're using [pnpm workspaces](https://pnpm.io/workspaces) to manage multiple projects.

```
├── ./apps - Standalone web applications
│  ├── ./portals - Generates sites for data portals. Contains configurations for each maintained portal.
│  ├── ./SageAccountWeb - Standalone client-only React application for managing a Sage Bionetworks user account
│  └── ./synapse-oauth-signin - Standalone client-only React application used to authenticate and consent to an app that uses Synapse OAuth2+OIDC services
├── ./projects - Libraries and utilities that may or may not be published to NPM
│  └── ./synapse-react-client - React components and utilities used in Synapse.org and portals
└── ./shared - Shared configurations that are referenced across all projects
```

## Release Cycle

The `main` branch contains to the development version all packages. All changes should be merged into `main`.

For those packages that are deployed to npm, the deployment will occur when the version is changed in the `main` branch. A tag of the form `<projectName>/v<version>` will be created and applied to the commit which was deployed.

You can generate release notes for a particular release using the GitHub API before you merge the change that bumps the version number. These notes will include all changes in the monorepo, so you may want to manually filter through these release notes. For example (this assumes you have `gh` and `jq` installed).

```zsh
PACKAGE_NAME='synapse-react-client'
NEW_VERSION='3.1.29' # this is the new version that you have not yet released
LAST_VERSION='3.1.28' # this is the last released version

gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  /repos/Sage-Bionetworks/synapse-web-monorepo/releases/generate-notes \
  -f tag_name="$PACKAGE_NAME/v$NEW_VERSION" \
  -f target_commitish='main' \ 
  -f previous_tag_name="$PACKAGE_NAME/v$LAST_VERSION" | jq -r '.body'
```

Sometimes, due to Synapse.org's deployment cadence, a hotfix must be based on an existing version of a package, rather than the latest version. To release a hotfix, create a branch based off of the tagged commit of the intended base version. Make your changes, and create a pull request to pull the hotfix into `main`. After your code is reviewed, change your local version of the package(s) to release to an appropriate value (e.g. 1.0.0-SWC-1234), and locally run `pnpm -r publish`. You will need to have configured your NPM credentials and have been granted access to publish our projects.

## CI/CD

On latest commit for a PR where changes will be merged to main `main`, multiple jobs will be triggered in GitHub Actions.

All changed projects and their dependents will be built, linted, and tested. Some notes:

- If the test step fails, you can find the failed tests by downloading the artifacts from the job, which includes HTML reports of the tests.
- We currently have many warnings and errors emitted in each test, so we have configured each test run to silence the output. If you need to see these warnings and errors, remove the 'silent' parameter from the script or configuration file.