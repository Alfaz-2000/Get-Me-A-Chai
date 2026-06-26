"use client"
import React, { Children, useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    // const {data:session} = useSession()
    const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
    const [currentUser, setCurrentUser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter() 

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(searchParams.get("paymentdone") == "true") {
            toast(`🦄 Thank you ${paymentform.name} for your support!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        router.push(`/${username}`)
    }, [])



    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const getData = async (params) => {
        let u = await fetchuser(username)
        setCurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments)

    }

    const pay = async (amount) => {
        // Get orderId
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get me a chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }

        var rzp1 = new Razorpay(options);
        rzp1.open()
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className="coverimg w-full relative">
                <img className="object-cover w-full h-48 md:h-[350]" src={currentUser.coverpic} alt="User-Cover-picture" />
                <div className="absolute -bottom-20 right-[30%] md:right-[45.5%] rounded-full size-36 overflow-hidden border-white border-2">
                    <img className="rounded-full object-cover size-36" width={128} height={128} src={currentUser.profilepic} alt="User-Profile-picture" />
                </div>
            </div>
            <div className="info flex flex-col justify-center items-center my-24 gap-2">
                <div className="cname font-bold text-lg">
                    @ {username}
                </div>
                <div className="text-slate-400">
        let's help {username} get a chai!
                </div>
                <div className="text-slate-400">
        {payments.length} Payments. ₹ {payments.reduce((a, b)=> a + b.amount,0)} Rasied
                </div>
                <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row">
                    <div className="suppoters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="text-2xl text-center font-bold my-5">Top 10 Suppoters</h2>
                        <ul className="mx-5 text-lg">
                            {payments.length == 0 && <li>No Payments Yet!</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className="my-4 flex gap-2 items-center">
                                    <img width={33} src="avatar.gif" alt="avatar.gif" />
                                    <span>{p.name} bought chai for you of <span className="font-bold">₹{p.amount}</span> with the msg "{p.message}"</span>
                                </li>
                            })}

                        </ul>
                    </div>
                    <div className="makepayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className="text-2xl text-center font-bold my-5">Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            {/* input and message */}
                            <div className="">
                                <input onChange={handlechange} value={paymentform.name} type="text" className="w-full p-3 rounded-lg bg-slate-800" name='name' placeholder="Enter Name" />
                            </div>
                            <input onChange={handlechange} value={paymentform.message} type="text" className="w-full p-3 rounded-lg bg-slate-800" name='message' placeholder="Enter Message" />

                            <input onChange={handlechange} value={paymentform.amount} type="text" className="w-full p-3 rounded-lg bg-slate-800 " name='amount' placeholder="Enter the Amount" />

                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center leading-5 disabled:from-purple-100' disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1} >Pay</button>
                        </div>
                        {/* or chose from these  amount */}

                        <div className="flex flex-col md:flex-row gap-2 mt-5">

                            <button className="p-3 rounded-lg bg-slate-800" onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className="p-3 rounded-lg bg-slate-800" onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className="p-3 rounded-lg bg-slate-800" onClick={() => pay(5000)}>Pay ₹50</button>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentPage
