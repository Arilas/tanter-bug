import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_secured/shelves")({
  component: Shelves,
});

function Shelves() {
  return (
    <div>
      <h1>Shelves</h1>
    </div>
  );
}
