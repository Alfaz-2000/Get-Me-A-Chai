// cwh method
// import React from 'react'
// import PaymentPage from "@/components/PaymentPage";


// const Username = ({params}) => {
//  return (
// <>
//     <PaymentPage username={params.username}/>
// </>
   
//   )
//  }

// export default Username

import PaymentPage from "@/components/PaymentPage";
import { notFound } from "next/navigation";
import User from "@/models/User";
import connectDB from "@/db/connectDb";

export default async function Username({ params }) {
  const { username } = await params;

  await connectDB();

const checkuser = async ()=>{

  const user = await User.findOne({ username });
  
  if (!user) {
    notFound();
  }
}
await checkuser()

  return <PaymentPage username={username} />;
} 

export async function generateMetadata({ params }) {
  const { username } = await params;

  return {
    title: `Support ${username} - Get Me A Chai`,
    description: `Support ${username} on Get Me A Chai`
  };
}

// nextjs 16 method
// export default async function Username({ params }) {
//   const { username } = await params;

//   return (
//     <>
//       <PaymentPage username={params.username}/>
//     </>
//   );
// }