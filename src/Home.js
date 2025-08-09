import platform_demo from "./images/gdln_demo.mov"

const Home = () => {
    return (
        <div className="flex flex-col items-center mt-6">
            <div className="text-blue-700 font-semibold mb-2">Done-for-you portfolio websites for travel agents.</div>
            <div className="font-bold text-5xl text-blue-700 text-center">
                Portfolio websites that help travel agents win more clients.
            </div>
            <div className="mt-4 px-72 text-center text-3xl font-semibold">
                Launch a modern, on-brand website without the tech headache—copy, design, hosting, and updates all handled for you.
            </div>
            <div className="flex flex-row gap-4 mt-8">
                <a href="#contact" className="py-3 px-6 font-semibold rounded-lg bg-blue-700 text-white">Get a Demo</a>
                <a href="#templates" className="py-3 px-6 font-semibold rounded-lg border border-blue-700 text-blue-700">See Templates</a>
            </div>
            <div className='mt-8'>
                <video src={platform_demo} controls className='w-[600px] h-auto rounded-lg shadow-slate-400 shadow-md mb-24'/>
            </div>
        </div>
    )
}

export default Home