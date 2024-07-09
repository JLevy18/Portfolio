import { useRouter } from 'next/router';
import { FaTools, FaHardHat, FaToolbox } from "react-icons/fa";


const Blog = () => {

    const router = useRouter();

    return (
        <>
            <div className="blog-container">
                <div className='notify-construction-container'>
                    <div className='notify-construction-icon-container'>
                        <div className='notify-icon w-24 h-24 z-20 translate-x-12 -translate-y-7 -rotate-z-45'>
                            <FaHardHat style={{ width: '100%', height: '100%', color: "#9C836F" }} />
                        </div>
                        <div className='notify-icon w-52 h-52 z-10'>
                            <FaToolbox style={{ width: '100%', height: '100%', color: "#32312F" }} />
                        </div>
                        <div className='notify-icon w-32 h-32 rotate-[25deg] -translate-x-20'>
                            <FaTools style={{ width: '100%', height: '100%', color: "#9C836F" }} />
                        </div>
                    </div>
                    <b className='construction-text'>Under Construction <p>:(</p></b>
                </div>
                <div className='coming-soon-container -translate-x-2'>
                    <h1>Members Only Blog Coming Soon!</h1>
                    <button onClick={() => { window.open('https://www.patreon.com/LevTheDev', "_blank") }}>Subscribe Here!</button>
                    <button onClick={() => router.push('/')}>Return to Home</button>
                </div>
            </div>
        </>
    )
}
export default Blog;