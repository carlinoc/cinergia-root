import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { routesPaths } from '@/app/routes/routes';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
  },
  pages: {
    signIn: routesPaths?.signin,
  },
});

export { handler as GET, handler as POST };
