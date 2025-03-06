type ISODateString = string;
export interface DefaultSession {
  user?: User
  expires: ISODateString
}

/** The active session of the logged in user. */
export interface Session extends DefaultSession {}

export interface DefaultUser {
  id?: string
  name?: string | null
  email?: string | null
  image?: string | null
}

/**
 * The shape of the returned object in the OAuth providers' `profile` callback,
 * available in the `jwt` and `session` callbacks,
 * or the second parameter of the `session` callback, when using a database.
 */
export interface User extends DefaultUser {}

/**
 
 * If you have session expiry times of 30 days (the default) or more, then you probably don't need to change any of the default options.
 *
 * However, if you need to customize the session behavior and/or are using short session expiry times, you can pass options to the provider to customize the behavior of the {@link useSession} hook.
 */
export interface SessionProviderProps {
  children: React.ReactNode
  session?: Session | null
  baseUrl?: string
  basePath?: string
}

