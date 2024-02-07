import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    jwt: ({ token, account }) => {
      if (account?.access_token) {
        token.access_token = account.access_token
      }

      return token
    },
    session: ({ session, token }) => {
      const accessTtoken = token.access_token as string
      const sub = token.sub as string

      if (token?.access_token) {
        session.accessToken = accessTtoken
        session.sub = sub
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
