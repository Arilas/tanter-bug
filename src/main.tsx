import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import { Context, makeContext } from "./context/makeContext";
import { AuthService } from "./context/AuthService";
import { LocatorContext } from "./context/LocatorContext";

// Create a new router instance
const context = makeContext();
const router = createRouter({ routeTree, context });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
  interface RouteContext extends Context {}
}
async function boot() {
  const auth = await context.getInstance(AuthService);
  await router.invalidate();
  // auth.getEventEmitter().on("auth", () => {
  //   router.invalidate();
  // });
  // auth.getEventEmitter().on("logout", () => {
  //   router.invalidate();
  // });
  // Render the app
  const rootElement = document.getElementById("root")!;
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <StrictMode>
        <LocatorContext.Provider value={context}>
          <RouterProvider router={router} context={context} />
        </LocatorContext.Provider>
      </StrictMode>
    );
  }
}

boot().catch((error) => {
  console.error(error);
});
