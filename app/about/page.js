import React from 'react'

const page = () => {
  return (
    <>
    <div className="min-h-screen px-8 md:px-4">

    <div className="flex flex-col gap-4 items-center text-white">
      <h1 className="text-3xl font-bold m-5">About Get Me a Chai</h1>
      <p className="text-lg mx-5">This is platform where you can fund or donate to your favorite creators. this helps in community building and supporting creative endeavors.and both creators and supporters feel happy when they are able to connect and collaborate. and create some meaningful software or digital products.</p>
    </div>
    <div className="flex flex-col gap-10 text-white container mx-auto pb-2 pt-4">
        <h2 className="text-2xl font-bold mb-4">how it works</h2>
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
        <p className="text-lg">user can create a campaign to raise funds for their creative projects. and supporters can contribute to these campaigns to help bring the creator's vision to life.</p>
        

        <h2 className="text-2xl font-bold mb-4">Benefits for Creators</h2>
        <p className="text-lg">Creators can use the platform to fund their creative projects and connect with a community of supporters who believe in their vision.</p>

        <h2 className="text-2xl font-bold mb-4">Benefits for Supporters</h2>
        <p className="text-lg">Supporters can contribute to campaigns they believe in and help bring creators' visions to life.</p> 

        <h2 className="text-2xl font-bold mb-4">Community Building</h2>
        <p className="text-lg">The platform fosters a sense of community by connecting creators and supporters who share a passion for creativity and innovation.</p>
    </div>
    </div>
    </>
  )
}

export default page
export async function generateMetadata() {
  return {
    title: `About - Get Me A Chai`,
    description: `About Get Me A Chai`
  };
}
