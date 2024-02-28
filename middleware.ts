/**
 * NextAuth Middleware Export
 *
 * This module exports the default NextAuth middleware for authentication.
 * It also provides a configuration object specifying the route matcher.
 *
 * @module
 * @see {@link https://next-auth.js.org/configuration/pages#setting-up "Setting Up"}
 * @see {@link https://next-auth.js.org/getting-started/introduction "NextAuth Introduction"}
 * @exports {Object} - Default NextAuth middleware and configuration object.
 * @example
 * // Usage in a Next.js page or API route
 * import middleware, { config } from 'next-auth/middleware';
 *
 * export default middleware;
 * export const config = { matcher: ['/peliculas/watch/:path*'] };
 */
export { default } from 'next-auth/middleware';

/**
 * Middleware Configuration
 *
 * The configuration object for the NextAuth middleware, specifying the route matcher.
 *
 * @const {Object}
 * @property {string[]} matcher - An array of strings representing the routes to match for the middleware.
 * @default ['/peliculas/watch/:path*']
 * @example
 * // Usage in a Next.js page or API route
 * export const config = { matcher: ['/peliculas/watch/:path*'] };
 */
export const config = { matcher: ['/peliculas/watch/:path*'] };
