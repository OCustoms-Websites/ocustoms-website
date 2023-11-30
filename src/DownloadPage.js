import apple from './images/apple.png'
import windows from './images/windows.png'

const DownloadPage = () => {
    return (
        <div className="flex flex-row items-center justify-center h-screen gap-16">
            <div className="flex flex-col items-center justify-center p-8 border-2 border-blue-700 shadow-lg rounded-lg">
                <img alt="" src={apple} className='w-auto h-[185px]'/>
                <div className='my-4 font-semibold'>Mac</div>
                <a href="https://gondolin-app.s3.us-east-2.amazonaws.com/Gondolin-1.0.5-arm64.dmg" download="Gondolin.dmg" className="py-3 px-6 font-semibold rounded-lg bg-blue-700 text-white mt-8">
                    Download
                </a>
            </div>
            <div className="flex flex-col items-center justify-center px-8 py-10 border-2 border-blue-700 shadow-lg rounded-lg">
                <img alt="" src={windows} className='w-auto h-[170px]'/>
                <div className='my-4 font-semibold'>Windows x64</div>
                <a href="https://gondolin-app.s3.us-east-2.amazonaws.com/Gondolin+Setup+1.0.5.exe" download="GondolinSetup.exe" className="py-3 px-6 font-semibold rounded-lg bg-blue-700 text-white mt-8">
                    Download
                </a>
            </div>
        </div>
    )
}

export default DownloadPage