import platform_demo from "./images/gdln_demo.mov"

const Home = () => {
    return (
        <div className="flex flex-col items-center mt-6">
            <div className="font-bold text-5xl text-blue-700">
                <i>Master</i> Your Focus With Gondolin
            </div>
            <div className="mt-4 px-72 text-center text-3xl font-semibold">
                Leverage GPT-4 to command your concentration and carve out distraction-free digital spaces.
            </div>
            <div className='mt-8'>
                <video src={platform_demo} controls className='w-[600px] h-auto rounded-lg shadow-slate-400 shadow-md mb-16'/>
            </div>
        </div>
    )
}

export default Home