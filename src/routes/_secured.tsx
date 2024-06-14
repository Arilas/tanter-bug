import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_secured")({
  async beforeLoad({ context }) {
    if (!(await context.isAuthenticated())) {
      throw redirect({
        to: "/login",
      });
    }
    return context;
  },
  async loader({ context }) {
    // Error here: Cannot read properties of undefined (reading 'isAuthenticated')
    await context.isAuthenticated();
    console.log("Authenticated");
  },
});
