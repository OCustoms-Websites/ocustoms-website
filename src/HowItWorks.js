import HowItWorksCard from "./HowItWorksCard"
import React from 'react';

const HowItWorks = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col pb-10 pt-10">
            <div className="text-center font-semibold text-blue-700 mb-4 text-xs">
                WHY OCUSTOMS
            </div>
            <div className="text-3xl font-bold text-center">
                Everything you need, built in.
            </div>
            <div className="flex flex-col mt-16 items-center gap-4">
                <div className="flex flex-row gap-8">
                    <HowItWorksCard step={"01"} title={"Done-for-you build"} description={"We design, write, and launch your site so you don’t have to."}/>
                    <HowItWorksCard step={"02"} title={"Lead capture that works"} description={"Inquiry forms, calendar booking, and CTA placements optimized for conversion."}/>
                </div>
                <div className="flex flex-row gap-8">
                    <HowItWorksCard step={"03"} title={"SEO & speed"} description={"Technical SEO, fast load times, and best practices baked in."}/>
                    <HowItWorksCard step={"04"} title={"Easy updates"} description={"Send edits anytime or make quick changes yourself—your choice."}/>
                </div>

            </div>
        </div>
    )
})

export default HowItWorks