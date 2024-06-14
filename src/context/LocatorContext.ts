import { createContext } from "react";
import { Context, makeContext } from "./makeContext";

export const LocatorContext = createContext<Context | null>(null);
