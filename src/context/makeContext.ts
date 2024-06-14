import { AuthService } from "./AuthService";

export function makeContext() {
  const locator = new Map<any, any>([[AuthService, new AuthService()]]);

  async function isAuthenticated() {
    const auth = await getInstance(AuthService);
    if (!auth) {
      throw new Error("AuthService not found");
    }
    return auth.isAuthenticated();
  }

  async function getInstance<T>(kind: { new (): T }): Promise<T> {
    if (locator.has(kind)) {
      return locator.get(kind);
    }
    const instance = new kind();
    locator.set(kind, instance);
    return instance;
  }

  return {
    locator,
    isAuthenticated,
    getInstance,
  };
}

export type Context = ReturnType<typeof makeContext>;
