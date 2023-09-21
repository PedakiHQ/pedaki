import { getServerSession } from 'next-auth';
import type { DefaultSession, NextAuthOptions } from 'next-auth';

// Only used to extract the auth information
// Mainly on the navbar to show a login button or the user's avatar.

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      image: string;
      name: string;
      email: string;
    };
  }
}

const useSecureCookies = process.env.NODE_ENV === 'production';

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV !== 'production',
  useSecureCookies: useSecureCookies,
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: process.env.NODE_ENV === 'production' ? '.pedaki.fr' : undefined,
        secure: useSecureCookies,
      },
    },
  },
  session: {
    strategy: 'jwt',
  },
  providers: [],
};

export const auth = () => {
  return getServerSession(authOptions);
};
