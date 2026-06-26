
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import User from "@/models/User"
import connectDB from "@/db/connectDb"
import Payment from "@/models/Payment"


const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
       clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider == "github"){
      // waitting db to connect
      await connectDB()
      // checks if user already exists in db ot not
      const currentUser = await User.findOne({email:user.email})
      if(!currentUser){
        const newUser = await User.create({
          email:user.email,
          username:user.email.split("@")[0],
        })

      }
      return true;
    }
  },
  async session({session, user, token}){
    await connectDB()
    const dbUser = await User.findOne({email:session.user.email})

    session.user.name = dbUser.username
    return session
    
  },
}
})

export { authOptions as GET, authOptions as POST };