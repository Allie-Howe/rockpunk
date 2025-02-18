import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/register'
  },
  callbacks: {
    authorized({auth, request}) {
      const isLoggedIn = !!auth?.user

      return isLoggedIn
    }
  },
  providers: []
} satisfies NextAuthConfig;
