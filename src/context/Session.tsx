import { createContext, useContext } from "react";
import { Session, SessionProviderProps, ProviderId } from "../ExpoOauth.types";

export type SessionContextValue<R extends boolean = false> = R extends true
  ? { data: Session; status: "authenticated" }
  | { data: null; status: "loading" }
  : { data: Session; status: "authenticated" }
  | { data: null; status: "unauthenticated" | "loading" };

const SessionContext = createContext<SessionContextValue<true> | null>(null);

export function SessionProvider({children, basePath, baseUrl, session }: SessionProviderProps) {
  const value = session ? { data: session, status: "authenticated" as const } : { data: null, status: "loading" as const };

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

/**
 * @returns The current session
 */
export function useSession() {
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return session;
}

/**
 * Initialize the signin flow for the provider
 */
export async function signIn(
  provider?: ProviderId
) {
}
