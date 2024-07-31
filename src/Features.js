import DSA from './images/DSA.png'
import recruiter from './images/recruiter.png'
import ww1 from './images/WW1.png'
import openai from './images/openai_logo.png'
import chrome from './images/chrome.png'
import brave from './images/brave.png'
import edge from './images/edge.png'
import opera from './images/opera.png'
// import mobileapp from './images/gdln_mobileapp_ss.png'
import React from 'react';


const Features = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="flex flex-col items-center px-10 pb-24 bg-white mt-16 pt-10">
            <div className="text-center font-semibold text-blue-700 mb-4 text-xs">
                FEATURES
            </div>
            <div className="text-3xl font-bold text-center mb-24">
                <i className="text-blue-700">Discover</i> What Gondolin Can Do
            </div>
            <div className="flex flex-col gap-[150px]">
                <div className="flex flex-row gap-[200px] items-center">
                    <div>  
                        <img alt="" src={DSA} className='rounded-lg w-[350px]'/>
                        <img alt="" src={recruiter} className='rounded-lg w-[350px] mt-4'/>
                        <img alt="" src={ww1} className='rounded-lg w-[350px] mt-4'/>
                    </div>
                    <div className='flex flex-col w-[300px]'>
                        <div className='font-black text-xl text-center text-blue-700'>
                            AI-Powered Focus
                        </div>
                        <div className='mt-2 text-center'>
                            Gondolin utilizes GPT4 to intelligently discern your work-related tasks, creating a distraction-free digital environment that keeps you immersed in productivity.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-[200px] items-center">
                    <div className='flex flex-col w-[300px]'>
                        <div className='font-black text-xl text-center text-blue-700'>
                            Smart Blocking
                        </div>
                        <div className='mt-2 text-center'>
                            Smart Blocking intuitively filters out websites that detract from your task, employing GPT4 to adapt in real-time to your tasks and maintain your focus.
                        </div>
                    </div>
                    <div>
                        <img alt="" src={openai} className='rounded-lg w-[250px] ml-24'/>
                    </div>
                </div>
                <div className="flex flex-row gap-[200px] items-center">
                    <div className='flex flex-col ml-8'>
                        <div className='flex flex-row'>
                            <img alt="" src={chrome} className='rounded-lg h-[100px]'/>
                            <img alt="" src={edge} className='rounded-lg h-[100px] ml-6'/>
                        </div>
                        <div className='flex flex-row mt-6'>
                            <img alt="" src={brave} className='rounded-lg h-[100px]'/>
                            <img alt="" src={opera} className='rounded-lg h-[100px] ml-1'/>
                        </div>
                    </div>
                    <div className='flex flex-col w-[300px] ml-20'>
                        <div className='font-black text-xl text-center text-blue-700'>
                            Cross-Browser Support
                        </div>
                        <div className='mt-2 text-center'>
                            Gondolin unifies your focus by simultaneously monitoring multiple browser activities directly from its desktop app, ensuring a distraction-free workflow from a single desktop application, no matter where you browse.
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row gap-[200px] items-center">
                    <div className='flex flex-col w-[300px]'>
                        <div className='font-black text-xl text-center text-blue-700'>
                            Mobile App Integration
                        </div>
                        <div className='mt-2 text-center'>
                        Gondolin's mobile app syncs with your desktop to block distracting apps during focus sessions. Experience uninterrupted productivity on-the-go, ensuring a seamless, distraction-free digital environment across all your devices.
                        </div>
                    </div>
                    <div>
                        <img alt="" src={mobileapp} className='rounded-lg w-[120px] ml-[173px]'/>
                    </div>
                </div> */}
            </div>
        </div>
    )

})

export default Features