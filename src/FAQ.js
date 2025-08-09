import React from 'react';

const FAQ = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col p-10 bg-slate-200">
            <div className="text-3xl font-bold text-center">
                FAQ
            </div>
            <div className="mt-8">
                <div className="font-semibold">How long does it take to launch?</div>
                <div className="mb-4">Most sites are ready in days once we have your content.</div>
                <div className="font-semibold">Can you migrate my old site?</div>
                <div className="mb-4">Yes, we’ll move over key pages, images, and redirects.</div>
                <div className="font-semibold">Do I own my domain?</div>
                <div className="mb-4">Yes. We can help connect it.</div>
                <div className="font-semibold">Can I request updates?</div>
                <div className="mb-4">Yes—send edits anytime or use our quick-edit CMS where available.</div>
                <div className="font-semibold">What if I’m not tech-savvy?</div>
                <div className="mb-4">We handle the tech; you handle the travel expertise.</div>
                <div className="font-semibold">Do you provide email or forms?</div>
                <div>We integrate with your preferred tools.</div>
            </div>
        </div>
    )
})

export default FAQ
