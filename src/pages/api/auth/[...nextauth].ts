import NextAuth, { NextAuthOptions } from 'next-auth'
import Google from 'next-auth/providers/google'
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity'
import { client } from '@sanity/lib/client'

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.SECRET, 
  adapter: SanityAdapter(client)
}

export default NextAuth(authOptions)
