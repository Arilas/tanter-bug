/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SecuredImport } from './routes/_secured'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const SecuredShelvesLazyImport = createFileRoute('/_secured/shelves')()
const AuthLoginLazyImport = createFileRoute('/_auth/login')()

// Create/Update Routes

const SecuredRoute = SecuredImport.update({
  id: '/_secured',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const SecuredShelvesLazyRoute = SecuredShelvesLazyImport.update({
  path: '/shelves',
  getParentRoute: () => SecuredRoute,
} as any).lazy(() =>
  import('./routes/_secured/shelves.lazy').then((d) => d.Route),
)

const AuthLoginLazyRoute = AuthLoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/_auth/login.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_secured': {
      id: '/_secured'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof SecuredImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/_secured/shelves': {
      id: '/_secured/shelves'
      path: '/shelves'
      fullPath: '/shelves'
      preLoaderRoute: typeof SecuredShelvesLazyImport
      parentRoute: typeof SecuredImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  SecuredRoute: SecuredRoute.addChildren({ SecuredShelvesLazyRoute }),
  AuthLoginLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_secured",
        "/_auth/login"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_secured": {
      "filePath": "_secured.tsx",
      "children": [
        "/_secured/shelves"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.lazy.tsx"
    },
    "/_secured/shelves": {
      "filePath": "_secured/shelves.lazy.tsx",
      "parent": "/_secured"
    }
  }
}
ROUTE_MANIFEST_END */
