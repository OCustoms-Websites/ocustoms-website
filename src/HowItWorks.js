import HowItWorksCard from "./HowItWorksCard"
import React from 'react';

const HowItWorks = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col pb-10 pt-10">
            <div className="text-center font-semibold text-blue-700 mb-4 text-xs">
                HOW DOES IT WORK?
            </div>
            <div className="text-3xl font-bold text-center">
                <i className="text-blue-700">Unlock</i> Your Productivity with Gondolin
            </div>
            <div className="flex flex-col mt-16 items-center gap-4">
                <div className="flex flex-row gap-8">
                    <HowItWorksCard step={"01"} title={"Install With Ease"} description={"Effortlessly integrate Gondolin with your preferred browsers. Just a one-time setup, and you're all set for distraction-free browsing sessions."}/>
                    <HowItWorksCard step={"02"} title={"Customize Your Focus"} description={"Launch Gondolin and share your current task. The AI works better with more details, fine-tuning your web environment for a bespoke browsing experience."}/>
                </div>
                <div className="flex flex-row gap-8">
                    <HowItWorksCard step={"03"} title={"Begin Your Focused Journey"} description={"A single click activates Gondolin, which starts to block out distractions, aligning your web usage with your goals. Step into your work with newfound clarity."}/>
                    <HowItWorksCard step={"04"} title={"Set Up for Success"} description={"Apply these steps across all your browsers. With Gondolin, transform the internet into a tool of productivity, ready to assist you in every task."}/>
                </div>

            </div>
        </div>
    )
})

export default HowItWorks