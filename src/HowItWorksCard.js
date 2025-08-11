const HowItWorksCard = ({step, title, description, delay = 0, active = false}) => {
    return (
        <div className={`flex flex-row p-4 hover:bg-white w-[400px] rounded-lg fade-in-card ${active ? 'in-view' : ''}`} style={{ animationDelay: `${delay}ms` }}>
            <div className="font-black text-4xl text-blue-700 mr-4">
                {step}
            </div>
            <div className="flex flex-col">
                <div className="font-semibold text-lg">
                    {title}
                </div>
                <div className="mt-2">
                    {description}
                </div>

            </div>
        </div>
    )


}

export default HowItWorksCard