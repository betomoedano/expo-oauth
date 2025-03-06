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
