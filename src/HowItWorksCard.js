const HowItWorksCard = ({step, title, description}) => {
    return (
        <div className="flex flex-row p-4 hover:bg-white w-[400px] rounded-lg">
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