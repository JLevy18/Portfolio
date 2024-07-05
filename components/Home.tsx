import Image from 'next/image'
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        const homeContainer = document.querySelector('.home-container');
        setTimeout(() => {
            homeContainer.classList.add('loaded');
        }, 3000); // Adjust the delay as needed
    }, []);


    return (
        <div className="home-container">
            <div className='content-container'>

                <div className='header-container'>
                    <Image
                        src="/assets/Header.png"
                        alt="Title"
                        width={2636}
                        height={746}
                        loading='eager'
                        className='object-contain drop-shadow-md'
                    />
                </div>

                <div className='profile-container'>
                    <div className='profile-img-container'>
                        <Image
                            src="/assets/Profile_Front.png"
                            alt="ProfileFront"
                            fill={true}
                            loading='eager'
                        />
                    </div>
                    <div className='greeting-container'>
                        <div className='message-container'>
                            <p className='-ml-4'>Hey There! My name is Justin, also known as, LevTheDev.</p>
                            <p className='ml-1'>I'm a passionate Software Engineer who loves bringing ideas to life.</p>
                            <p className='ml-3'>When I'm not working, you can find me enjoying various online games</p>
                            <p className='ml-1'>with friends or exploring one of my many project ideas. You can follow</p>
                            <p className='-ml-4'>the development of my projects as they progress on YouTube!</p>
                        </div>
                    </div>
                </div>

                <div className='socials-container'>
                    <div className='icon-container' onClick={() => { window.open('https://www.github.com/JLevy18', "_blank") }}>
                        <Image
                            src="/assets/socials/github.svg"
                            alt="Github"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container' onClick={() => { window.open('https://www.linkedin.com/in/jlevy18/', "_blank") }}>
                        <Image
                            src="/assets/socials/linkedin.svg"
                            alt="Linkedin"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container' onClick={() => { window.open('https://www.youtube.com/channel/UCm3dXeDpEoPABhIPs9EkBrg', "_blank") }}>
                        <Image
                            src="/assets/socials/youtube.svg"
                            alt="YouTube"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container' onClick={() => { window.open('https://www.patreon.com/LevTheDev', "_blank") }}>
                        <Image
                            src="/assets/socials/patreon.svg"
                            alt="Patreon"
                            fill={true}
                            className='github'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;