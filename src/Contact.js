import React from 'react';

const Contact = React.forwardRef((props, ref) => {
    return (
        <div id="contact" ref={ref} className="flex flex-col items-center p-10 bg-white">
            <div className="text-3xl font-bold text-center">
                Get a demo
            </div>
            <div className="mt-2 text-center">
                Tell us a bit about your business. We’ll share templates and pricing.
            </div>
            <form className="flex flex-col gap-4 mt-6 w-full max-w-md">
                <input type="text" placeholder="Name" className="border p-2 rounded" />
                <input type="email" placeholder="Email" className="border p-2 rounded" />
                <input type="text" placeholder="Phone (optional)" className="border p-2 rounded" />
                <input type="text" placeholder="Current website (optional)" className="border p-2 rounded" />
                <textarea placeholder="Notes" className="border p-2 rounded" />
                <button type="submit" className="py-2 px-6 bg-blue-700 text-white rounded">Request Demo</button>
            </form>
        </div>
    )
})

export default Contact
