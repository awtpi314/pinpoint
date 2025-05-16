import NextAuth from "next-auth";
import MicrosoftEntra from "next-auth/providers/microsoft-entra-id";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    MicrosoftEntra({
      clientId: process.env.AUTH_ENTRA_ID,
      clientSecret: process.env.AUTH_ENTRA_SECRET,
    }),
  ],
});
