"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import { Children } from "react"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    // Fetching creator/developer razorpay secrets fron DB who is getting paid
    let user  = await User.findOne({username: to_username})
    const secret = user.razorpaysecret
    
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

   let options = {
    amount:Number.parseInt(amount),
    currency:"INR",
   }

   let x = await instance.orders.create(options)

//    this is object of payment fron db
   await Payment.create({oid:x.id, amount:amount/100, to_user:to_username, name:paymentform.name, message:paymentform.message})
   return x;
}

// user return cwh
// export const fetchuser = async (username)=>{
//     await connectDB()
//         let u = await User.findOne({username:username})
//         let user = u.toObject({flattendObjectIds:true})
//         return user
// }
export const fetchuser = async (username) => {
    await connectDB()

    const user = await User.findOne({ username }).lean()

    return JSON.parse(JSON.stringify(user))
}

// cwh

// export const fetchpayment = async (username)=>{
//     await connectDB()
//     let p = await Payment.find({to_user:username}).sort({amount:-1}).lean()
//     return p
// }

export const fetchpayments = async (username) => {
    await connectDB()

    const payments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(7).lean()

    return JSON.parse(JSON.stringify(payments))
}

export const updateProfile = async (data,oldusername)=>{
    await connectDB()
    let ndata = Object.fromEntries(data)

    // condition to check if username already exsist before upadating it
    if(oldusername !== ndata.username){
        let u = await User.findOne({username: ndata.username})
        if(u){
            return {error:"username already taken"}
        }
        await User.updateOne({email:ndata.email},ndata)
        await Payment.updateMany({to_user: oldusername},{to_user: ndata.username})
    }
    else{
        await User.updateOne({email:ndata.email},ndata)

    }

}