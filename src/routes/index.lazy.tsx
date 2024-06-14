import { createLazyFileRoute, Navigate } from "@tanstack/react-router";

import { useContext } from "react";
import { LocatorContext } from "../context/LocatorContext";
import { AuthService } from "../context/AuthService";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const ctx = useContext(LocatorContext);
  if (!ctx) {
    throw new Error("LocatorContext not found");
  }
  if (ctx.locator.get(AuthService).isAuthenticated()) {
    return <Navigate to="/shelves" />;
  }
  return <Navigate to="/login" />;
}
