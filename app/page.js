import Image from "next/image";

export default function Home() {
  return (
    <>
   <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] ">
    <div className="font-bold text-3xl">GetMeAChai!</div>
    <p>A funding platform for developers, get funded by pepole</p>
    <div className="">
   <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center leading-5">Start Here!</button>
   <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center leading-5">Read More!</button>
    </div>
   </div>
   <div className="bg-white h-1 opacity-10"></div>

   {/* section two */}

   <div className="text-white container mx-auto pb-32 pt-14">
    <h1 className="text-2xl font-bold text-center mb-14">Your fans can buy you chai</h1>
    <div className="flex gap-5 justify-around">
      <div className="item space-y-3 flex flex-col justify-center items-center">
        <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="man-image" />
        <p className="font-bold">fans can fund you</p>
        <p className="text-center">your fan can help you here..</p>
      </div>
      <div className="item space-y-3 flex flex-col justify-center items-center">
        <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="coin-image" />
        <p className="font-bold">fans can fund you</p>
        <p className="text-center">your fan can help you here..</p>
      </div>
      <div className="item space-y-3 flex flex-col justify-center items-center">
        <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="group-image" />
        <p className="font-bold">fans can fund you</p>
        <p className="text-center">your fan can help you here..</p>
      </div>
    </div>

   </div>
    </>
  );
}
