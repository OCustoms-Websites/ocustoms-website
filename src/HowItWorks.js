import HowItWorksCard from "./HowItWorksCard"
import React from 'react';

const HowItWorks = React.forwardRef((props, ref) => {
    const sectionRef = React.useRef(null);
    const [inView, setInView] = React.useState(false);

    React.useEffect(() => {
        const target = sectionRef.current;
        if (!target) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { root: null, rootMargin: '0px', threshold: 0.2 }
        );
        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={(node) => { sectionRef.current = node; if (typeof ref === 'function') ref(node); else if (ref) ref.current = node; }} className="flex flex-col pb-10 pt-10 bg-slate-200">
            <div className="text-center font-semibold text-blue-700 mb-4 mt-4 text-xs">
                WHY OCUSTOMS
            </div>
            <div className="text-3xl font-bold text-center">
                Everything you need, built in.
            </div>
            <div className="flex flex-col mt-16 items-center gap-4">
                <div className="flex flex-row gap-8">
                    <HowItWorksCard active={inView} delay={0} step={"01"} title={"Done-for-you build"} description={"We design, write, and launch your site so you don’t have to."}/>
                    <HowItWorksCard active={inView} delay={1000} step={"02"} title={"24/7 customer support"} description={"Real people, anytime you need help."}/>
                </div>
                <div className="flex flex-row gap-8">
                    <HowItWorksCard active={inView} delay={2000} step={"03"} title={"Easy updates made by us"} description={"Send changes, we handle them for you."}/>
                    <HowItWorksCard active={inView} delay={3000} step={"04"} title={"We handle the tech and maintenance"} description={"We manage hosting, monitoring, and updates—so you can focus on clients."}/>
                </div>
                <div className="flex flex-row gap-8 justify-center">
                    <HowItWorksCard active={inView} delay={4000} step={"05"} title={"We integrate with your preferred tools."} description={"Connect your calendars, forms, and analytics."}/>
                </div>

            </div>
        </div>
    )
})

export default HowItWorks